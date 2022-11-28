from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetLinodeStatsPathParams:
    linode_id: int = field(metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLinodeStatsSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetLinodeStatsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetLinodeStatsRequest:
    path_params: GetLinodeStatsPathParams = field()
    security: GetLinodeStatsSecurity = field()
    

@dataclass
class GetLinodeStatsResponse:
    content_type: str = field()
    status_code: int = field()
    linode_stats: Optional[shared.LinodeStats] = field(default=None)
    get_linode_stats_default_application_json_object: Optional[GetLinodeStatsDefaultApplicationJSON] = field(default=None)
    
