from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05CareContextsOnDiscoverHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05CareContextsOnDiscoverRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    patient_discovery_result: Optional[shared.PatientDiscoveryResult] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05CareContextsOnDiscoverRequest:
    headers: PostV05CareContextsOnDiscoverHeaders = field(default=None)
    request: PostV05CareContextsOnDiscoverRequests = field(default=None)
    

@dataclass
class PostV05CareContextsOnDiscoverResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
