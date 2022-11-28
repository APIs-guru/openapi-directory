from dataclasses import dataclass, field



@dataclass
class GetUUIDResponse:
    content_type: str = field()
    status_code: int = field()
    
