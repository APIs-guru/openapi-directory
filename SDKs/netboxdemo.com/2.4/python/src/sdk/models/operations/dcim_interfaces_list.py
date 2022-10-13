from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DcimInterfacesListQueryParams:
    device: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device', 'style': 'form', 'explode': True }})
    device_id: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'device_id', 'style': 'form', 'explode': True }})
    enabled: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'enabled', 'style': 'form', 'explode': True }})
    form_factor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'form_factor', 'style': 'form', 'explode': True }})
    lag_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lag_id', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    mac_address: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mac_address', 'style': 'form', 'explode': True }})
    mgmt_only: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mgmt_only', 'style': 'form', 'explode': True }})
    mtu: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'mtu', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    vlan: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'vlan', 'style': 'form', 'explode': True }})
    vlan_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'vlan_id', 'style': 'form', 'explode': True }})
    

@dataclass
class DcimInterfacesListRequest:
    query_params: DcimInterfacesListQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class DcimInterfacesList200ApplicationJSON:
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    results: List[shared.Interface] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class DcimInterfacesListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    dcim_interfaces_list_200_application_json_object: Optional[DcimInterfacesList200ApplicationJSON] = field(default=None)
    
