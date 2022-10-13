from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class UpdateItemContentTypePathParams:
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateItemContentTypeQueryParams:
    content_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'contentType', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateItemContentTypeSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateItemContentTypeRequest:
    path_params: UpdateItemContentTypePathParams = field(default=None)
    query_params: UpdateItemContentTypeQueryParams = field(default=None)
    security: UpdateItemContentTypeSecurity = field(default=None)
    

@dataclass
class UpdateItemContentTypeResponse:
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
