from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetOfferingsOfferingIDPathParams:
    offering_id: str = field(default=None, metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOfferingsOfferingIDRequest:
    path_params: GetOfferingsOfferingIDPathParams = field(default=None)
    

@dataclass
class GetOfferingsOfferingIDResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    offering_metadata_response: Optional[shared.OfferingMetadataResponse] = field(default=None)
    status_code: int = field(default=None)
    
