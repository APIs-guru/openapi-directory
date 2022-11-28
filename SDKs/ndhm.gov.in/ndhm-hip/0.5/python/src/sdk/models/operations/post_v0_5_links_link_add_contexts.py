from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05LinksLinkAddContextsHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_cm_id: str = field(metadata={'header': { 'field_name': 'X-CM-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05LinksLinkAddContextsRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    patient_care_context_link_request: Optional[shared.PatientCareContextLinkRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05LinksLinkAddContextsRequest:
    headers: PostV05LinksLinkAddContextsHeaders = field()
    request: PostV05LinksLinkAddContextsRequests = field()
    

@dataclass
class PostV05LinksLinkAddContextsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
