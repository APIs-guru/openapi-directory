from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetLinodeTransferByYearMonthPathParams:
    linode_id: int = field(metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    month: int = field(metadata={'path_param': { 'field_name': 'month', 'style': 'simple', 'explode': False }})
    year: int = field(metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLinodeTransferByYearMonthSecurity:
    oauth: Optional[shared.SchemeOauth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    personal_access_token: Optional[shared.SchemePersonalAccessToken] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetLinodeTransferByYearMonthDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    

@dataclass
class GetLinodeTransferByYearMonthRequest:
    path_params: GetLinodeTransferByYearMonthPathParams = field()
    security: GetLinodeTransferByYearMonthSecurity = field()
    

@dataclass
class GetLinodeTransferByYearMonthResponse:
    content_type: str = field()
    status_code: int = field()
    get_linode_transfer_by_year_month_200_application_json_any: Optional[Any] = field(default=None)
    get_linode_transfer_by_year_month_default_application_json_object: Optional[GetLinodeTransferByYearMonthDefaultApplicationJSON] = field(default=None)
    
