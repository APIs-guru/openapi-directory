from dataclasses import dataclass, field
from typing import Enum,Optional
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
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetEventsRequest:
    query_params: GetEventsQueryParams = field(default=None)
    security: GetEventsSecurity = field(default=None)
    

@dataclass
class GetEventsResponse:
    audit_resp: Optional[shared.AuditResp] = field(default=None)
    content_type: str = field(default=None)
    error_forbidden: Optional[shared.ErrorForbidden] = field(default=None)
    error_not_found: Optional[shared.ErrorNotFound] = field(default=None)
    error_unauthorized: Optional[shared.ErrorUnauthorized] = field(default=None)
    status_code: int = field(default=None)
    
