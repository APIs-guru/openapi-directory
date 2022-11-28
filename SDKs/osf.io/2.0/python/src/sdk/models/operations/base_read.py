from dataclasses import dataclass, field



@dataclass
class BaseReadResponse:
    content_type: str = field()
    status_code: int = field()
    
