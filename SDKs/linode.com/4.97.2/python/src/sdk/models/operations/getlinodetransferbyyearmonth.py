from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetLinodeTransferByYearMonthPathParams:
    linode_id: int = field(default=None, metadata={'path_param': { 'field_name': 'linodeId', 'style': 'simple', 'explode': False }})
    month: int = field(default=None, metadata={'path_param': { 'field_name': 'month', 'style': 'simple', 'explode': False }})
    year: int = field(default=None, metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLinodeTransferByYearMonthSecurityOption1:
    personal_access_token: shared.SchemePersonalAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetLinodeTransferByYearMonthSecurityOption2:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetLinodeTransferByYearMonthSecurity:
    option1: Optional[GetLinodeTransferByYearMonthSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetLinodeTransferByYearMonthSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetLinodeTransferByYearMonthRequest:
    path_params: GetLinodeTransferByYearMonthPathParams = field(default=None)
    security: GetLinodeTransferByYearMonthSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetLinodeTransferByYearMonthDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetLinodeTransferByYearMonthResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_linode_transfer_by_year_month_200_application_json_any: Optional[Any] = field(default=None)
    get_linode_transfer_by_year_month_default_application_json_object: Optional[GetLinodeTransferByYearMonthDefaultApplicationJSON] = field(default=None)
    
