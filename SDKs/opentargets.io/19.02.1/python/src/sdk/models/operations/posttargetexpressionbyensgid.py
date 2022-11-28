from dataclasses import dataclass, field



@dataclass
class PostTargetExpressionByEnsgidRequest:
    request: str = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostTargetExpressionByEnsgidResponse:
    content_type: str = field()
    status_code: int = field()
    
