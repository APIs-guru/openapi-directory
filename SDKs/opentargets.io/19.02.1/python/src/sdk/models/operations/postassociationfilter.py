from dataclasses import dataclass, field



@dataclass
class PostAssociationFilterRequest:
    request: str = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAssociationFilterResponse:
    content_type: str = field()
    status_code: int = field()
    
