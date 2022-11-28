from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetAncestorsPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAncestorsQueryParams:
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAncestorsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetAncestorsRequest:
    path_params: GetAncestorsPathParams = field()
    query_params: GetAncestorsQueryParams = field()
    security: GetAncestorsSecurity = field()
    

@dataclass
class GetAncestorsResponse:
    content_type: str = field()
    status_code: int = field()
    base_item_dtos: Optional[List[shared.BaseItemDto]] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
