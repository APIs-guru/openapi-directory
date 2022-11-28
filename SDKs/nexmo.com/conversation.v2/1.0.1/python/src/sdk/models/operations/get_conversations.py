from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetConversationsQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    date_end: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'date_end', 'style': 'form', 'explode': True }})
    date_start: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'date_start', 'style': 'form', 'explode': True }})
    order: Optional[shared.OrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConversationsRequest:
    query_params: GetConversationsQueryParams = field()
    

@dataclass
class GetConversationsResponse:
    content_type: str = field()
    status_code: int = field()
    get_conversations_200_application_json_any: Optional[Any] = field(default=None)
    
