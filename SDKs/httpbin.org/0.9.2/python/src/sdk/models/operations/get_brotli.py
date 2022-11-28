from dataclasses import dataclass, field



@dataclass
class GetBrotliResponse:
    content_type: str = field()
    status_code: int = field()
    
