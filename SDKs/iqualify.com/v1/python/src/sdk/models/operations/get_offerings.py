from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetOfferingsResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    offering_metadata_responses: Optional[List[shared.OfferingMetadataResponse]] = field(default=None)
    
