from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05ConsentsOnFetchHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hiu_id: str = field(metadata={'header': { 'field_name': 'X-HIU-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05ConsentsOnFetchRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    consent_artefact_response: Optional[shared.ConsentArtefactResponse] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05ConsentsOnFetchRequest:
    headers: PostV05ConsentsOnFetchHeaders = field()
    request: PostV05ConsentsOnFetchRequests = field()
    

@dataclass
class PostV05ConsentsOnFetchResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
