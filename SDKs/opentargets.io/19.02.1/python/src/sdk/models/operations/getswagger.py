from dataclasses import dataclass, field



@dataclass
class GetSwaggerResponse:
    content_type: str = field()
    status_code: int = field()
    
