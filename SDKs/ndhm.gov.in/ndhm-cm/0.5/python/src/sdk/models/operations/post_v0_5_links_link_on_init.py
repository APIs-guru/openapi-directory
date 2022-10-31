from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05LinksLinkOnInitHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05LinksLinkOnInitRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    patient_link_reference_result: Optional[shared.PatientLinkReferenceResult] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05LinksLinkOnInitRequest:
    headers: PostV05LinksLinkOnInitHeaders = field(default=None)
    request: PostV05LinksLinkOnInitRequests = field(default=None)
    

@dataclass
class PostV05LinksLinkOnInitResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
