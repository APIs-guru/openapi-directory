from dataclasses import dataclass, field



@dataclass
class GetImageSvgResponse:
    content_type: str = field()
    status_code: int = field()
    
