from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05LinksLinkOnConfirmHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class PostV05LinksLinkOnConfirmRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    patient_link_result: Optional[shared.PatientLinkResult] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05LinksLinkOnConfirmRequest:
    headers: PostV05LinksLinkOnConfirmHeaders = field(default=None)
    request: PostV05LinksLinkOnConfirmRequests = field(default=None)
    

@dataclass
class PostV05LinksLinkOnConfirmResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
