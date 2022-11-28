from dataclasses import dataclass, field



@dataclass
class DeleteDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
