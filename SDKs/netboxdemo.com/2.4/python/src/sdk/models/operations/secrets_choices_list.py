from dataclasses import dataclass, field



@dataclass
class SecretsChoicesListResponse:
    content_type: str = field()
    status_code: int = field()
    
