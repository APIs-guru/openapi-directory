from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetOfferingsOfferingIDActivitiesOpenresponsePathParams:
    offering_id: str = field(default=None, metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOfferingsOfferingIDActivitiesOpenresponseRequest:
    path_params: GetOfferingsOfferingIDActivitiesOpenresponsePathParams = field(default=None)
    

@dataclass
class GetOfferingsOfferingIDActivitiesOpenresponseResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    offering_activities_responses: Optional[List[shared.OfferingActivitiesResponse]] = field(default=None)
    status_code: int = field(default=None)
    
