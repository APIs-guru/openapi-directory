from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetOfferingsOfferingIDAnalyticsSocialNotesPathParams:
    offering_id: str = field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOfferingsOfferingIDAnalyticsSocialNotesRequest:
    path_params: GetOfferingsOfferingIDAnalyticsSocialNotesPathParams = field()
    

@dataclass
class GetOfferingsOfferingIDAnalyticsSocialNotesResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    social_notes_responses: Optional[List[shared.SocialNotesResponse]] = field(default=None)
    
