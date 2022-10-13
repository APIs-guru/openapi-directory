from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05LinksLinkAddContextsHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class PostV05LinksLinkAddContextsRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    patient_care_context_link_request: Optional[shared.PatientCareContextLinkRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05LinksLinkAddContextsRequest:
    headers: PostV05LinksLinkAddContextsHeaders = field(default=None)
    request: PostV05LinksLinkAddContextsRequests = field(default=None)
    

@dataclass
class PostV05LinksLinkAddContextsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
