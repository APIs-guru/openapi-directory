from dataclasses import dataclass, field



@dataclass
class PostBestHitSearchRequest:
    request: str = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostBestHitSearchResponse:
    content_type: str = field()
    status_code: int = field()
    
