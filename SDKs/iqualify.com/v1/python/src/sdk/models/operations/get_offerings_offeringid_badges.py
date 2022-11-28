from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetOfferingsOfferingIDBadgesPathParams:
    offering_id: str = field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOfferingsOfferingIDBadgesRequest:
    path_params: GetOfferingsOfferingIDBadgesPathParams = field()
    

@dataclass
class GetOfferingsOfferingIDBadgesResponse:
    content_type: str = field()
    status_code: int = field()
    badge: Optional[shared.Badge] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
