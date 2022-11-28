from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetManagedStatsSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetManagedStats200ApplicationJSON:
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class GetManagedStatsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetManagedStatsRequest:
    security: GetManagedStatsSecurity = field()
    

@dataclass
class GetManagedStatsResponse:
    content_type: str = field()
    status_code: int = field()
    get_managed_stats_200_application_json_object: Optional[GetManagedStats200ApplicationJSON] = field(default=None)
    get_managed_stats_default_application_json_object: Optional[GetManagedStatsDefaultApplicationJSON] = field(default=None)
    
