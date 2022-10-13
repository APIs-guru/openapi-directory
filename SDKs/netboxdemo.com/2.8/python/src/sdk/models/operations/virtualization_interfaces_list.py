from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class VirtualizationInterfacesListQueryParams:
    enabled: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'enabled', 'style': 'form', 'explode': True }})
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    id_gt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__gt', 'style': 'form', 'explode': True }})
    id_gte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__gte', 'style': 'form', 'explode': True }})
    id_lt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__lt', 'style': 'form', 'explode': True }})
    id_lte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__lte', 'style': 'form', 'explode': True }})
    id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__n', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    mac_address: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mac_address', 'style': 'form', 'explode': True }})
    mac_address_ic: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mac_address__ic', 'style': 'form', 'explode': True }})
    mac_address_ie: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mac_address__ie', 'style': 'form', 'explode': True }})
    mac_address_iew: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mac_address__iew', 'style': 'form', 'explode': True }})
    mac_address_isw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mac_address__isw', 'style': 'form', 'explode': True }})
    mac_address_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mac_address__n', 'style': 'form', 'explode': True }})
    mac_address_nic: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mac_address__nic', 'style': 'form', 'explode': True }})
    mac_address_nie: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mac_address__nie', 'style': 'form', 'explode': True }})
    mac_address_niew: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mac_address__niew', 'style': 'form', 'explode': True }})
    mac_address_nisw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mac_address__nisw', 'style': 'form', 'explode': True }})
    mtu: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mtu', 'style': 'form', 'explode': True }})
    mtu_gt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mtu__gt', 'style': 'form', 'explode': True }})
    mtu_gte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mtu__gte', 'style': 'form', 'explode': True }})
    mtu_lt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mtu__lt', 'style': 'form', 'explode': True }})
    mtu_lte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mtu__lte', 'style': 'form', 'explode': True }})
    mtu_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mtu__n', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    name_ic: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name__ic', 'style': 'form', 'explode': True }})
    name_ie: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name__ie', 'style': 'form', 'explode': True }})
    name_iew: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name__iew', 'style': 'form', 'explode': True }})
    name_isw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name__isw', 'style': 'form', 'explode': True }})
    name_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name__n', 'style': 'form', 'explode': True }})
    name_nic: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name__nic', 'style': 'form', 'explode': True }})
    name_nie: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name__nie', 'style': 'form', 'explode': True }})
    name_niew: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name__niew', 'style': 'form', 'explode': True }})
    name_nisw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name__nisw', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    virtual_machine: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'virtual_machine', 'style': 'form', 'explode': True }})
    virtual_machine_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'virtual_machine__n', 'style': 'form', 'explode': True }})
    virtual_machine_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'virtual_machine_id', 'style': 'form', 'explode': True }})
    virtual_machine_id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'virtual_machine_id__n', 'style': 'form', 'explode': True }})
    

@dataclass
class VirtualizationInterfacesListRequest:
    query_params: VirtualizationInterfacesListQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class VirtualizationInterfacesList200ApplicationJSON:
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    results: List[shared.VirtualMachineInterface] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class VirtualizationInterfacesListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    virtualization_interfaces_list_200_application_json_object: Optional[VirtualizationInterfacesList200ApplicationJSON] = field(default=None)
    
