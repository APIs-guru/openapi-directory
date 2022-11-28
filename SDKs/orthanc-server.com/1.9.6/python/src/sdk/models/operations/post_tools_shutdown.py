from dataclasses import dataclass, field



@dataclass
class PostToolsShutdownResponse:
    content_type: str = field()
    status_code: int = field()
    
