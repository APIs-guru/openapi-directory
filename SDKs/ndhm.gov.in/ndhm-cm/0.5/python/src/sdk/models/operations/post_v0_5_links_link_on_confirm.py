from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05LinksLinkOnConfirmHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05LinksLinkOnConfirmRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    patient_link_result: Optional[shared.PatientLinkResult] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05LinksLinkOnConfirmRequest:
    headers: PostV05LinksLinkOnConfirmHeaders = field()
    request: PostV05LinksLinkOnConfirmRequests = field()
    

@dataclass
class PostV05LinksLinkOnConfirmResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
