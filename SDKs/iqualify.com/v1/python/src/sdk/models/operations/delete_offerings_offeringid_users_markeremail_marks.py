from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class DeleteOfferingsOfferingIDUsersMarkerEmailMarksPathParams:
    marker_email: str = field(default=None, metadata={'path_param': { 'field_name': 'markerEmail', 'style': 'simple', 'explode': False }})
    offering_id: str = field(default=None, metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteOfferingsOfferingIDUsersMarkerEmailMarksRequest:
    path_params: DeleteOfferingsOfferingIDUsersMarkerEmailMarksPathParams = field(default=None)
    request: List[str] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteOfferingsOfferingIDUsersMarkerEmailMarksResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    offering_users: Optional[List[shared.OfferingUser]] = field(default=None)
    status_code: int = field(default=None)
    
