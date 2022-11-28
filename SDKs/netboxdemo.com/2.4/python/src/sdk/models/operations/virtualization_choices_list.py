from dataclasses import dataclass, field



@dataclass
class VirtualizationChoicesListResponse:
    content_type: str = field()
    status_code: int = field()
    
