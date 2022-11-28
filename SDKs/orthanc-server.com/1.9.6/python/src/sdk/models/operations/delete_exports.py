from dataclasses import dataclass, field



@dataclass
class DeleteExportsResponse:
    content_type: str = field()
    status_code: int = field()
    
