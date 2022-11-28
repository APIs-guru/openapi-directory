from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetYearPathParams:
    year: int = field(metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetYearQueryParams:
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetYearSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetYearRequest:
    path_params: GetYearPathParams = field()
    query_params: GetYearQueryParams = field()
    security: GetYearSecurity = field()
    

@dataclass
class GetYearResponse:
    content_type: str = field()
    status_code: int = field()
    base_item_dto: Optional[shared.BaseItemDto] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
