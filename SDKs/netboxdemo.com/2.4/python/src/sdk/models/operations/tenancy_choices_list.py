from dataclasses import dataclass, field



@dataclass
class TenancyChoicesListResponse:
    content_type: str = field()
    status_code: int = field()
    
