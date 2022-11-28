from dataclasses import dataclass, field



@dataclass
class GetUserAgentResponse:
    content_type: str = field()
    status_code: int = field()
    
