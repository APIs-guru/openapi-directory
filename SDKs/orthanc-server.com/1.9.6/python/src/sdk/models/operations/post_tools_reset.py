from dataclasses import dataclass, field



@dataclass
class PostToolsResetResponse:
    content_type: str = field()
    status_code: int = field()
    
