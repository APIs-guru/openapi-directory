from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostOfferingsRequest:
    request: shared.OfferingRequired = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostOfferingsResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    offering_metadata_response: Optional[shared.OfferingMetadataResponse] = field(default=None)
    
