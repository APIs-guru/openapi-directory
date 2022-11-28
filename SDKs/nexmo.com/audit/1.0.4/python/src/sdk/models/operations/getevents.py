from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetEventsQueryParams:
    date_from: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'date_from', 'style': 'form', 'explode': True }})
    date_to: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'date_to', 'style': 'form', 'explode': True }})
    event_type: Optional[shared.EventTypesEnum] = field(default=None, metadata={'query_param': { 'field_name': 'event_type', 'style': 'form', 'explode': True }})
    page: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    search_text: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search_text', 'style': 'form', 'explode': True }})
    size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEventsSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetEventsRequest:
    query_params: GetEventsQueryParams = field()
    security: GetEventsSecurity = field()
    

@dataclass
class GetEventsResponse:
    content_type: str = field()
    status_code: int = field()
    audit_resp: Optional[shared.AuditResp] = field(default=None)
    error_forbidden: Optional[shared.ErrorForbidden] = field(default=None)
    error_not_found: Optional[shared.ErrorNotFound] = field(default=None)
    error_unauthorized: Optional[shared.ErrorUnauthorized] = field(default=None)
    
