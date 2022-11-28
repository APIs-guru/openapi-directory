from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05CareContextsOnDiscoverHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05CareContextsOnDiscoverRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    patient_discovery_result: Optional[shared.PatientDiscoveryResult] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05CareContextsOnDiscoverRequest:
    headers: PostV05CareContextsOnDiscoverHeaders = field()
    request: PostV05CareContextsOnDiscoverRequests = field()
    

@dataclass
class PostV05CareContextsOnDiscoverResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
