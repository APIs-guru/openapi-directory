from dataclasses import dataclass, field



@dataclass
class DcimChoicesListResponse:
    content_type: str = field()
    status_code: int = field()
    
