from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from sdk.models import shared

class GetCallsOrderEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class GetCallsStatusEnum(str, Enum):
    STARTED = "started"
    RINGING = "ringing"
    ANSWERED = "answered"
    MACHINE = "machine"
    COMPLETED = "completed"
    BUSY = "busy"
    CANCELLED = "cancelled"
    FAILED = "failed"
    REJECTED = "rejected"
    TIMEOUT = "timeout"
    UNANSWERED = "unanswered"


@dataclass
class GetCallsQueryParams:
    conversation_uuid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'conversation_uuid', 'style': 'form', 'explode': True }})
    date_end: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'date_end', 'style': 'form', 'explode': True }})
    date_start: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'date_start', 'style': 'form', 'explode': True }})
    order: Optional[GetCallsOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    record_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'record_index', 'style': 'form', 'explode': True }})
    status: Optional[GetCallsStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCallsSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetCallsRequest:
    query_params: GetCallsQueryParams = field(default=None)
    security: GetCallsSecurity = field(default=None)
    

@dataclass
class GetCallsResponse:
    content_type: str = field(default=None)
    get_calls_response: Optional[shared.GetCallsResponse] = field(default=None)
    status_code: int = field(default=None)
    
