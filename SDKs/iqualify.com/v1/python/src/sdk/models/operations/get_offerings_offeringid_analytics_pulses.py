from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetOfferingsOfferingIDAnalyticsPulsesPathParams:
    offering_id: str = field(metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOfferingsOfferingIDAnalyticsPulsesRequest:
    path_params: GetOfferingsOfferingIDAnalyticsPulsesPathParams = field()
    

@dataclass
class GetOfferingsOfferingIDAnalyticsPulsesResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    get_offerings_offering_id_analytics_pulses_200_application_json_strings: Optional[List[str]] = field(default=None)
    
