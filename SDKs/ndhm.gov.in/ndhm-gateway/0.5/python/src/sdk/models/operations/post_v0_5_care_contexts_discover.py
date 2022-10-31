from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostV05CareContextsDiscoverHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    x_hip_id: str = field(default=None, metadata={'header': { 'field_name': 'X-HIP-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostV05CareContextsDiscoverRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    patient_discovery_request: Optional[shared.PatientDiscoveryRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostV05CareContextsDiscoverRequest:
    headers: PostV05CareContextsDiscoverHeaders = field(default=None)
    request: PostV05CareContextsDiscoverRequests = field(default=None)
    

@dataclass
class PostV05CareContextsDiscoverResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
