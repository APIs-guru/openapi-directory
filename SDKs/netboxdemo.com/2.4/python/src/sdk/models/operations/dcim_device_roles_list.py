from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DcimDeviceRolesListQueryParams:
    color: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'color', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    slug: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'slug', 'style': 'form', 'explode': True }})
    vm_role: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'vm_role', 'style': 'form', 'explode': True }})
    

@dataclass
class DcimDeviceRolesListRequest:
    query_params: DcimDeviceRolesListQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class DcimDeviceRolesList200ApplicationJSON:
    count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    next: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    previous: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous' }})
    results: List[shared.DeviceRole] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class DcimDeviceRolesListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    dcim_device_roles_list_200_application_json_object: Optional[DcimDeviceRolesList200ApplicationJSON] = field(default=None)
    
