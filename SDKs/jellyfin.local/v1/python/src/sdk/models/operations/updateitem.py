from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UpdateItemPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateItemRequestsInput:
    base_item_dto: Optional[shared.BaseItemDtoInput] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    base_item_dto1: Optional[shared.BaseItemDtoInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    base_item_dto2: Optional[shared.BaseItemDtoInput] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateItemSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateItemRequest:
    path_params: UpdateItemPathParams = field()
    request: UpdateItemRequestsInput = field()
    security: UpdateItemSecurity = field()
    

@dataclass
class UpdateItemResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
