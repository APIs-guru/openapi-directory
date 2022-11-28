from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05LinksLinkOnInitHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_cm_id: str = field(metadata={'header': { 'field_name': 'X-CM-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05LinksLinkOnInitRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    patient_link_reference_result: Optional[shared.PatientLinkReferenceResult] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05LinksLinkOnInitRequest:
    headers: PostV05LinksLinkOnInitHeaders = field()
    request: PostV05LinksLinkOnInitRequests = field()
    

@dataclass
class PostV05LinksLinkOnInitResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
