from dataclasses import dataclass, field



@dataclass
class GetDenyResponse:
    content_type: str = field()
    status_code: int = field()
    
