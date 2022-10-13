from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutAdministrationEntityHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token' }})
    

@dataclass
class PutAdministrationEntityRequests:
    toggle_request: Optional[shared.ToggleRequest] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    toggle_request1: Optional[shared.ToggleRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    toggle_request2: Optional[shared.ToggleRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutAdministrationEntityRequest:
    headers: PutAdministrationEntityHeaders = field(default=None)
    request: Optional[PutAdministrationEntityRequests] = field(default=None)
    

@dataclass
class PutAdministrationEntityResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
