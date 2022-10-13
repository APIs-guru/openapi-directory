from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetLinodeStatsPathParams:
    linode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLinodeStatsSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetLinodeStatsSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetLinodeStatsSecurity:
    option1: Optional[GetLinodeStatsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetLinodeStatsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetLinodeStatsRequest:
    path_params: GetLinodeStatsPathParams = field(default=None)
    security: GetLinodeStatsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetLinodeStatsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetLinodeStatsResponse:
    content_type: str = field(default=None)
    linode_stats: Optional[shared.LinodeStats] = field(default=None)
    status_code: int = field(default=None)
    get_linode_stats_default_application_json_object: Optional[GetLinodeStatsDefaultApplicationJSON] = field(default=None)
    
