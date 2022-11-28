from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetOfferingsOfferingIDAnalyticsPulsesPulseIDResponsesPathParams:
    offering_id: str = field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    pulse_id: str = field(metadata={'path_param': { 'field_name': 'pulseId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOfferingsOfferingIDAnalyticsPulsesPulseIDResponsesRequest:
    path_params: GetOfferingsOfferingIDAnalyticsPulsesPulseIDResponsesPathParams = field()
    

@dataclass
class GetOfferingsOfferingIDAnalyticsPulsesPulseIDResponsesResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    pulse_responses: Optional[List[shared.PulseResponse]] = field(default=None)
    
