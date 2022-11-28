from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class UpdateItemImageIndexPathParams:
    image_index: int = field(metadata={'path_param': { 'field_name': 'imageIndex', 'style': 'simple', 'explode': False }})
    image_type: shared.ImageTypeEnum = field(metadata={'path_param': { 'field_name': 'imageType', 'style': 'simple', 'explode': False }})
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateItemImageIndexQueryParams:
    new_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'newIndex', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateItemImageIndexSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateItemImageIndexRequest:
    path_params: UpdateItemImageIndexPathParams = field()
    query_params: UpdateItemImageIndexQueryParams = field()
    security: UpdateItemImageIndexSecurity = field()
    

@dataclass
class UpdateItemImageIndexResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
