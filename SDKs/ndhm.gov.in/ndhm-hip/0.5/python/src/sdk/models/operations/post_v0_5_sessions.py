from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05SessionsRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    session_request: Optional[shared.SessionRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05SessionsRequest:
    request: PostV05SessionsRequests = field(default=None)
    

@dataclass
class PostV05SessionsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    session_response: Optional[shared.SessionResponse] = field(default=None)
    status_code: int = field(default=None)
    
