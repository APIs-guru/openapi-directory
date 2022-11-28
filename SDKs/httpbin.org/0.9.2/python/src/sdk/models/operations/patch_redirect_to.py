from dataclasses import dataclass, field



@dataclass
class PatchRedirectToResponse:
    content_type: str = field()
    status_code: int = field()
    
