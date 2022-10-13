from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PutDistributionsDistributionIDPathParams:
    distribution_id: int = field(default=None, metadata={'path_param': { 'field_name': 'distribution_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutDistributionsDistributionIDSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PutDistributionsDistributionIDRequest:
    path_params: PutDistributionsDistributionIDPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    security: PutDistributionsDistributionIDSecurity = field(default=None)
    

@dataclass
class PutDistributionsDistributionIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
