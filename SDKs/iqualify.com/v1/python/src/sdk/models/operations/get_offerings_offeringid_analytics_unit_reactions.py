from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetOfferingsOfferingIDAnalyticsUnitReactionsPathParams:
    offering_id: str = field(default=None, metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOfferingsOfferingIDAnalyticsUnitReactionsRequest:
    path_params: GetOfferingsOfferingIDAnalyticsUnitReactionsPathParams = field(default=None)
    

@dataclass
class GetOfferingsOfferingIDAnalyticsUnitReactionsResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    unit_reactions_analytics_responses: Optional[List[shared.UnitReactionsAnalyticsResponse]] = field(default=None)
    
