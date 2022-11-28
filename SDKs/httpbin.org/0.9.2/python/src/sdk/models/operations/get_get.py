from dataclasses import dataclass, field



@dataclass
class GetGetResponse:
    content_type: str = field()
    status_code: int = field()
    
