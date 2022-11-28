from dataclasses import dataclass, field



@dataclass
class DeleteRedirectToResponse:
    content_type: str = field()
    status_code: int = field()
    
