from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetOfferingsPastResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    offering_metadata_responses: Optional[List[shared.OfferingMetadataResponse]] = field(default=None)
    status_code: int = field(default=None)
    
