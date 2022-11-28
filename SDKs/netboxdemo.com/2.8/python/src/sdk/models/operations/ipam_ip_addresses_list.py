from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class IpamIPAddressesListQueryParams:
    address: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'address', 'style': 'form', 'explode': True }})
    assigned_to_interface: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'assigned_to_interface', 'style': 'form', 'explode': True }})
    created: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'created', 'style': 'form', 'explode': True }})
    created_gte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'created__gte', 'style': 'form', 'explode': True }})
    created_lte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'created__lte', 'style': 'form', 'explode': True }})
    device: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device', 'style': 'form', 'explode': True }})
    device_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'device_id', 'style': 'form', 'explode': True }})
    dns_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dns_name', 'style': 'form', 'explode': True }})
    dns_name_ic: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dns_name__ic', 'style': 'form', 'explode': True }})
    dns_name_ie: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dns_name__ie', 'style': 'form', 'explode': True }})
    dns_name_iew: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dns_name__iew', 'style': 'form', 'explode': True }})
    dns_name_isw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dns_name__isw', 'style': 'form', 'explode': True }})
    dns_name_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dns_name__n', 'style': 'form', 'explode': True }})
    dns_name_nic: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dns_name__nic', 'style': 'form', 'explode': True }})
    dns_name_nie: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dns_name__nie', 'style': 'form', 'explode': True }})
    dns_name_niew: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dns_name__niew', 'style': 'form', 'explode': True }})
    dns_name_nisw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dns_name__nisw', 'style': 'form', 'explode': True }})
    family: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'family', 'style': 'form', 'explode': True }})
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    id_gt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__gt', 'style': 'form', 'explode': True }})
    id_gte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__gte', 'style': 'form', 'explode': True }})
    id_lt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__lt', 'style': 'form', 'explode': True }})
    id_lte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__lte', 'style': 'form', 'explode': True }})
    id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id__n', 'style': 'form', 'explode': True }})
    interface: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'interface', 'style': 'form', 'explode': True }})
    interface_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'interface__n', 'style': 'form', 'explode': True }})
    interface_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'interface_id', 'style': 'form', 'explode': True }})
    interface_id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'interface_id__n', 'style': 'form', 'explode': True }})
    last_updated: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'last_updated', 'style': 'form', 'explode': True }})
    last_updated_gte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'last_updated__gte', 'style': 'form', 'explode': True }})
    last_updated_lte: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'last_updated__lte', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    mask_length: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'mask_length', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    parent: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'parent', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    role: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'role', 'style': 'form', 'explode': True }})
    role_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'role__n', 'style': 'form', 'explode': True }})
    status: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    status_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'status__n', 'style': 'form', 'explode': True }})
    tag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag', 'style': 'form', 'explode': True }})
    tag_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tag__n', 'style': 'form', 'explode': True }})
    tenant: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tenant', 'style': 'form', 'explode': True }})
    tenant_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tenant__n', 'style': 'form', 'explode': True }})
    tenant_group: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tenant_group', 'style': 'form', 'explode': True }})
    tenant_group_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tenant_group__n', 'style': 'form', 'explode': True }})
    tenant_group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tenant_group_id', 'style': 'form', 'explode': True }})
    tenant_group_id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tenant_group_id__n', 'style': 'form', 'explode': True }})
    tenant_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tenant_id', 'style': 'form', 'explode': True }})
    tenant_id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'tenant_id__n', 'style': 'form', 'explode': True }})
    virtual_machine: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'virtual_machine', 'style': 'form', 'explode': True }})
    virtual_machine_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'virtual_machine__n', 'style': 'form', 'explode': True }})
    virtual_machine_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'virtual_machine_id', 'style': 'form', 'explode': True }})
    virtual_machine_id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'virtual_machine_id__n', 'style': 'form', 'explode': True }})
    vrf: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'vrf', 'style': 'form', 'explode': True }})
    vrf_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'vrf__n', 'style': 'form', 'explode': True }})
    vrf_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'vrf_id', 'style': 'form', 'explode': True }})
    vrf_id_n: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'vrf_id__n', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class IpamIPAddressesList200ApplicationJSON:
    count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    results: List[shared.IPAddress] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous') }})
    

@dataclass
class IpamIPAddressesListRequest:
    query_params: IpamIPAddressesListQueryParams = field()
    

@dataclass
class IpamIPAddressesListResponse:
    content_type: str = field()
    status_code: int = field()
    ipam_ip_addresses_list_200_application_json_object: Optional[IpamIPAddressesList200ApplicationJSON] = field(default=None)
    
