from dataclasses import dataclass, field



@dataclass
class PostTargetByEnsgidRequest:
    request: str = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostTargetByEnsgidResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
