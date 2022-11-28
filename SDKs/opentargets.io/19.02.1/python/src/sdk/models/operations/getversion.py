from dataclasses import dataclass, field



@dataclass
class GetVersionResponse:
    content_type: str = field()
    status_code: int = field()
    
