from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteDistributionsDistributionIDPathParams:
    distribution_id: int = field(metadata={'path_param': { 'field_name': 'distribution_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDistributionsDistributionIDSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteDistributionsDistributionIDRequest:
    path_params: DeleteDistributionsDistributionIDPathParams = field()
    security: DeleteDistributionsDistributionIDSecurity = field()
    

@dataclass
class DeleteDistributionsDistributionIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
