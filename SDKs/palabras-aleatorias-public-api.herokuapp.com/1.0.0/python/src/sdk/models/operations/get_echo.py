from dataclasses import dataclass, field



@dataclass
class GetEchoResponse:
    content_type: str = field()
    status_code: int = field()
    
