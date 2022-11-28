from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReportViewingQueryParams:
    item_id: str = field(metadata={'query_param': { 'field_name': 'itemId', 'style': 'form', 'explode': True }})
    session_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sessionId', 'style': 'form', 'explode': True }})
    

@dataclass
class ReportViewingSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ReportViewingRequest:
    query_params: ReportViewingQueryParams = field()
    security: ReportViewingSecurity = field()
    

@dataclass
class ReportViewingResponse:
    content_type: str = field()
    status_code: int = field()
    
