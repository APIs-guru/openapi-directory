from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetOfferingsOfferingIDAnalyticsLearnersProgressPathParams:
    offering_id: str = field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOfferingsOfferingIDAnalyticsLearnersProgressRequest:
    path_params: GetOfferingsOfferingIDAnalyticsLearnersProgressPathParams = field()
    

@dataclass
class GetOfferingsOfferingIDAnalyticsLearnersProgressResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    learner_progress_responses: Optional[List[shared.LearnerProgressResponse]] = field(default=None)
    
