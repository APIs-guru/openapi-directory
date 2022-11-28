from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetLinodeStatsByYearMonthPathParams:
    linode_id: int = field(metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    month: int = field(metadata={'path_param': { 'field_name': 'month', 'style': 'simple', 'explode': False }})
    year: int = field(metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLinodeStatsByYearMonthSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetLinodeStatsByYearMonthDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetLinodeStatsByYearMonthRequest:
    path_params: GetLinodeStatsByYearMonthPathParams = field()
    security: GetLinodeStatsByYearMonthSecurity = field()
    

@dataclass
class GetLinodeStatsByYearMonthResponse:
    content_type: str = field()
    status_code: int = field()
    linode_stats: Optional[shared.LinodeStats] = field(default=None)
    get_linode_stats_by_year_month_default_application_json_object: Optional[GetLinodeStatsByYearMonthDefaultApplicationJSON] = field(default=None)
    
