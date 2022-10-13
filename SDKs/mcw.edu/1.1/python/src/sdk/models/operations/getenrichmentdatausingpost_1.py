from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetEnrichmentDataUsingPost1Request:
    request: shared.EnrichmentRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetEnrichmentDataUsingPost1Response:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
