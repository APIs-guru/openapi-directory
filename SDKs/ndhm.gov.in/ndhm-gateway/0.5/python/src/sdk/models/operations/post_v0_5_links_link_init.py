from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05LinksLinkInitHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hip_id: str = field(metadata={'header': { 'field_name': 'X-HIP-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05LinksLinkInitRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    patient_link_reference_request: Optional[shared.PatientLinkReferenceRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05LinksLinkInitRequest:
    headers: PostV05LinksLinkInitHeaders = field()
    request: PostV05LinksLinkInitRequests = field()
    

@dataclass
class PostV05LinksLinkInitResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
