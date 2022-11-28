from dataclasses import dataclass, field



@dataclass
class ConfigListResponse:
    content_type: str = field()
    status_code: int = field()
    
