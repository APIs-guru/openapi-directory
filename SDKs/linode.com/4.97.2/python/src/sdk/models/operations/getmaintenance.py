from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
GET_MAINTENANCE_SERVERS = [
	"https://api.linode.com/v4beta",
]


@dataclass
class GetMaintenanceSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetMaintenanceSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetMaintenanceSecurity:
    option1: Optional[GetMaintenanceSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetMaintenanceSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetMaintenanceRequest:
    server_url: Optional[str] = field(default=None)
    security: GetMaintenanceSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetMaintenance200ApplicationJSON:
    data: Optional[List[shared.Maintenance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetMaintenanceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetMaintenanceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_maintenance_200_application_json_object: Optional[GetMaintenance200ApplicationJSON] = field(default=None)
    get_maintenance_default_application_json_object: Optional[GetMaintenanceDefaultApplicationJSON] = field(default=None)
    
