from dataclasses import dataclass, field



@dataclass
class DeleteAMediaItemResponse:
    content_type: str = field()
    status_code: int = field()
    
