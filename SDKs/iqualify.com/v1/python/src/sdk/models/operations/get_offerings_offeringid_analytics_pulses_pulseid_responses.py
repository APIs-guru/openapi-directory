from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetOfferingsOfferingIDAnalyticsPulsesPulseIDResponsesPathParams:
    offering_id: str = field(default=None, metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    pulse_id: str = field(default=None, metadata={'path_param': { 'field_name': 'pulseId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOfferingsOfferingIDAnalyticsPulsesPulseIDResponsesRequest:
    path_params: GetOfferingsOfferingIDAnalyticsPulsesPulseIDResponsesPathParams = field(default=None)
    

@dataclass
class GetOfferingsOfferingIDAnalyticsPulsesPulseIDResponsesResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    pulse_responses: Optional[List[shared.PulseResponse]] = field(default=None)
    status_code: int = field(default=None)
    
