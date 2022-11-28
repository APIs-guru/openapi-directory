from dataclasses import dataclass, field



@dataclass
class GetHTMLResponse:
    content_type: str = field()
    status_code: int = field()
    
