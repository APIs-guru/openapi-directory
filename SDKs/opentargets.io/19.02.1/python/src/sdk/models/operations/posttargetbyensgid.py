from dataclasses import dataclass, field



@dataclass
class PostTargetByEnsgidRequest:
    request: str = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostTargetByEnsgidResponse:
    content_type: str = field()
    status_code: int = field()
    
