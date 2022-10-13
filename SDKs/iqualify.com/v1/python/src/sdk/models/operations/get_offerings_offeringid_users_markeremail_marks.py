from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetOfferingsOfferingIDUsersMarkerEmailMarksPathParams:
    marker_email: str = field(default=None, metadata={'path_param': { 'field_name': 'markerEmail', 'style': 'simple', 'explode': False }})
    offering_id: str = field(default=None, metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOfferingsOfferingIDUsersMarkerEmailMarksRequest:
    path_params: GetOfferingsOfferingIDUsersMarkerEmailMarksPathParams = field(default=None)
    

@dataclass
class GetOfferingsOfferingIDUsersMarkerEmailMarksResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    offering_users: Optional[List[shared.OfferingUser]] = field(default=None)
    status_code: int = field(default=None)
    
