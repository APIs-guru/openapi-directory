from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchOfferingsOfferingIDPathParams:
    offering_id: str = field(default=None, metadata={'path_param': { 'field_name': 'offeringId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchOfferingsOfferingIDRequest:
    path_params: PatchOfferingsOfferingIDPathParams = field(default=None)
    request: shared.Offering = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchOfferingsOfferingIDResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    offering_metadata_response: Optional[shared.OfferingMetadataResponse] = field(default=None)
    status_code: int = field(default=None)
    
