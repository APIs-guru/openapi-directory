from dataclasses import dataclass, field



@dataclass
class PostEvidenceFilterRequest:
    request: str = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostEvidenceFilterResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
