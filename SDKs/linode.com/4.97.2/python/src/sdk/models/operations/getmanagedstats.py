from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetManagedStatsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetManagedStatsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetManagedStatsSecurity:
    option1: Optional[GetManagedStatsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetManagedStatsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetManagedStatsRequest:
    security: GetManagedStatsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetManagedStats200ApplicationJSON:
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass_json
@dataclass
class GetManagedStatsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetManagedStatsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_managed_stats_200_application_json_object: Optional[GetManagedStats200ApplicationJSON] = field(default=None)
    get_managed_stats_default_application_json_object: Optional[GetManagedStatsDefaultApplicationJSON] = field(default=None)
    
