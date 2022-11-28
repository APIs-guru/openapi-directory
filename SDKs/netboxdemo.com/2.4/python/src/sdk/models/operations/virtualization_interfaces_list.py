from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class VirtualizationInterfacesListQueryParams:
    enabled: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'enabled', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    mac_address: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mac_address', 'style': 'form', 'explode': True }})
    mtu: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'mtu', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    virtual_machine: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'virtual_machine', 'style': 'form', 'explode': True }})
    virtual_machine_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'virtual_machine_id', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class VirtualizationInterfacesList200ApplicationJSON:
    count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: List[shared.Interface] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclass
class VirtualizationInterfacesListRequest:
    query_params: VirtualizationInterfacesListQueryParams = field()
    

@dataclass
class VirtualizationInterfacesListResponse:
    content_type: str = field()
    status_code: int = field()
    virtualization_interfaces_list_200_application_json_object: Optional[VirtualizationInterfacesList200ApplicationJSON] = field(default=None)
    
