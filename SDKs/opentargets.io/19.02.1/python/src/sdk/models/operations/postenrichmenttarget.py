from dataclasses import dataclass, field



@dataclass
class PostEnrichmentTargetRequest:
    request: str = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostEnrichmentTargetResponse:
    content_type: str = field()
    status_code: int = field()
    
