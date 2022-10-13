from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetLinodeStatsByYearMonthPathParams:
    linode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    month: int = field(default=None, metadata={'path_param': { 'field_name': 'month', 'style': 'simple', 'explode': False }})
    year: int = field(default=None, metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLinodeStatsByYearMonthSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetLinodeStatsByYearMonthSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetLinodeStatsByYearMonthSecurity:
    option1: Optional[GetLinodeStatsByYearMonthSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetLinodeStatsByYearMonthSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetLinodeStatsByYearMonthRequest:
    path_params: GetLinodeStatsByYearMonthPathParams = field(default=None)
    security: GetLinodeStatsByYearMonthSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetLinodeStatsByYearMonthDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetLinodeStatsByYearMonthResponse:
    content_type: str = field(default=None)
    linode_stats: Optional[shared.LinodeStats] = field(default=None)
    status_code: int = field(default=None)
    get_linode_stats_by_year_month_default_application_json_object: Optional[GetLinodeStatsByYearMonthDefaultApplicationJSON] = field(default=None)
    
