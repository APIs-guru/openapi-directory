from dataclasses import dataclass, field



@dataclass
class PostRelationRequest:
    request: str = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRelationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
