from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetOfferingsOfferingIDAnalyticsActivitiesResponsesPathParams:
    offering_id: str = field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOfferingsOfferingIDAnalyticsActivitiesResponsesRequest:
    path_params: GetOfferingsOfferingIDAnalyticsActivitiesResponsesPathParams = field()
    

@dataclass
class GetOfferingsOfferingIDAnalyticsActivitiesResponsesResponse:
    content_type: str = field()
    status_code: int = field()
    activity_attempt_open_responses: Optional[List[shared.ActivityAttemptOpenResponse]] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
