from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetOfferingsOfferingIDBadgesPathParams:
    offering_id: str = field(default=None, metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOfferingsOfferingIDBadgesRequest:
    path_params: GetOfferingsOfferingIDBadgesPathParams = field(default=None)
    

@dataclass
class GetOfferingsOfferingIDBadgesResponse:
    badge: Optional[shared.Badge] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
