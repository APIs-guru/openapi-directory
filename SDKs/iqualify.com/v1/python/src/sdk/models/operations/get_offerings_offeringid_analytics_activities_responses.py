from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetOfferingsOfferingIDAnalyticsActivitiesResponsesPathParams:
    offering_id: str = field(default=None, metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOfferingsOfferingIDAnalyticsActivitiesResponsesRequest:
    path_params: GetOfferingsOfferingIDAnalyticsActivitiesResponsesPathParams = field(default=None)
    

@dataclass
class GetOfferingsOfferingIDAnalyticsActivitiesResponsesResponse:
    activity_attempt_open_responses: Optional[List[shared.ActivityAttemptOpenResponse]] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
