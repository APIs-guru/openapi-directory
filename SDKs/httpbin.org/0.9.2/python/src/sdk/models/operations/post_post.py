from dataclasses import dataclass, field



@dataclass
class PostPostResponse:
    content_type: str = field()
    status_code: int = field()
    
