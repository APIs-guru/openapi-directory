from dataclasses import dataclass, field



@dataclass
class GetImageResponse:
    content_type: str = field()
    status_code: int = field()
    
