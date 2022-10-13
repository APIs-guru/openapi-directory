from dataclasses import dataclass, field



@dataclass
class PostPersonRegisterRequest:
    request: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    

@dataclass
class PostPersonRegisterResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
