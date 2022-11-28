from dataclasses import dataclass, field



@dataclass
class PostRelationRequest:
    request: str = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRelationResponse:
    content_type: str = field()
    status_code: int = field()
    
