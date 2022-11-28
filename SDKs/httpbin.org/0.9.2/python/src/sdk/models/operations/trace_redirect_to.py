from dataclasses import dataclass, field



@dataclass
class TraceRedirectToResponse:
    content_type: str = field()
    status_code: int = field()
    
