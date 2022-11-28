from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEnrichmentDataUsingPost1Request:
    request: shared.EnrichmentRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetEnrichmentDataUsingPost1Response:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
