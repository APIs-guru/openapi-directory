from dataclasses import dataclass, field



@dataclass
class GetImageJpegResponse:
    content_type: str = field()
    status_code: int = field()
    
