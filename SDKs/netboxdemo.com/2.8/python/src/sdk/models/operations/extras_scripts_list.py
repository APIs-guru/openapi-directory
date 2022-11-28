from dataclasses import dataclass, field



@dataclass
class ExtrasScriptsListResponse:
    content_type: str = field()
    status_code: int = field()
    
