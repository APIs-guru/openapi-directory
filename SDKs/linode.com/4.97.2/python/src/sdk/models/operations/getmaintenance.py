from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


GET_MAINTENANCE_SERVERS = [
	"https://api.linode.com/v4beta",
]


@dataclass
class GetMaintenanceSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetMaintenance200ApplicationJSON:
    data: Optional[List[shared.Maintenance]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pages') }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass_json
@dataclass
class GetMaintenanceDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetMaintenanceRequest:
    security: GetMaintenanceSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class GetMaintenanceResponse:
    content_type: str = field()
    status_code: int = field()
    get_maintenance_200_application_json_object: Optional[GetMaintenance200ApplicationJSON] = field(default=None)
    get_maintenance_default_application_json_object: Optional[GetMaintenanceDefaultApplicationJSON] = field(default=None)
    
