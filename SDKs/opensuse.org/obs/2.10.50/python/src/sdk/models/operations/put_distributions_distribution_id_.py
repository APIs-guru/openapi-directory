from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutDistributionsDistributionIDPathParams:
    distribution_id: int = field(metadata={'path_param': { 'field_name': 'distribution_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutDistributionsDistributionIDSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PutDistributionsDistributionIDRequest:
    path_params: PutDistributionsDistributionIDPathParams = field()
    security: PutDistributionsDistributionIDSecurity = field()
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    

@dataclass
class PutDistributionsDistributionIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
