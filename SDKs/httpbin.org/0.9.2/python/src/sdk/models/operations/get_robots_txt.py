from dataclasses import dataclass, field



@dataclass
class GetRobotsTxtResponse:
    content_type: str = field()
    status_code: int = field()
    
