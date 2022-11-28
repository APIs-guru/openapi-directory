from dataclasses import dataclass, field



@dataclass
class PostEvidenceByIDRequest:
    request: str = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostEvidenceByIDResponse:
    content_type: str = field()
    status_code: int = field()
    
