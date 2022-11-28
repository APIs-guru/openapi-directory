from dataclasses import dataclass, field



@dataclass
class PostEvidenceFilterRequest:
    request: str = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostEvidenceFilterResponse:
    content_type: str = field()
    status_code: int = field()
    
