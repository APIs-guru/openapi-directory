from dataclasses import dataclass, field



@dataclass
class GetPingResponse:
    content_type: str = field()
    status_code: int = field()
    
