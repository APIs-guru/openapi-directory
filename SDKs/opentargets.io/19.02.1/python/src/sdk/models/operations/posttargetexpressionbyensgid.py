from dataclasses import dataclass, field



@dataclass
class PostTargetExpressionByEnsgidRequest:
    request: str = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostTargetExpressionByEnsgidResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
