from dataclasses import dataclass, field



@dataclass
class KeycloakListResponse:
    content_type: str = field()
    status_code: int = field()
    
