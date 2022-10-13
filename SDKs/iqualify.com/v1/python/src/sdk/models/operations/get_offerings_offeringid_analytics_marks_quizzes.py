from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetOfferingsOfferingIDAnalyticsMarksQuizzesPathParams:
    offering_id: str = field(default=None, metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOfferingsOfferingIDAnalyticsMarksQuizzesRequest:
    path_params: GetOfferingsOfferingIDAnalyticsMarksQuizzesPathParams = field(default=None)
    

@dataclass
class GetOfferingsOfferingIDAnalyticsMarksQuizzesResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    quiz_mark_responses: Optional[List[shared.QuizMarkResponse]] = field(default=None)
    status_code: int = field(default=None)
    
