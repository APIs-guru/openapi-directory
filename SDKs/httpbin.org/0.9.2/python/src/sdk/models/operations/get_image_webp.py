from dataclasses import dataclass, field



@dataclass
class GetImageWebpResponse:
    content_type: str = field()
    status_code: int = field()
    
