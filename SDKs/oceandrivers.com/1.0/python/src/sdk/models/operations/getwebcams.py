from dataclasses import dataclass, field



@dataclass
class GetWebCamsResponse:
    content_type: str = field()
    status_code: int = field()
    
