from dataclasses import dataclass, field



@dataclass
class GetImagePngResponse:
    content_type: str = field()
    status_code: int = field()
    
