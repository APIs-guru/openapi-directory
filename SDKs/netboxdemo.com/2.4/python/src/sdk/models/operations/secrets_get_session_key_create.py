from dataclasses import dataclass, field



@dataclass
class SecretsGetSessionKeyCreateResponse:
    content_type: str = field()
    status_code: int = field()
    
