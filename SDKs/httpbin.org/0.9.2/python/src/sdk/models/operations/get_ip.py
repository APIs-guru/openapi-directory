from dataclasses import dataclass, field



@dataclass
class GetIPResponse:
    content_type: str = field()
    status_code: int = field()
    
