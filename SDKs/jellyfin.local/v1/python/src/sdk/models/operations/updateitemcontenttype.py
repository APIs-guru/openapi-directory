from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateItemContentTypePathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateItemContentTypeQueryParams:
    content_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'contentType', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateItemContentTypeSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateItemContentTypeRequest:
    path_params: UpdateItemContentTypePathParams = field()
    query_params: UpdateItemContentTypeQueryParams = field()
    security: UpdateItemContentTypeSecurity = field()
    

@dataclass
class UpdateItemContentTypeResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
