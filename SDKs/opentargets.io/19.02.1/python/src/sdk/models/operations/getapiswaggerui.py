from dataclasses import dataclass, field



@dataclass
class GetAPISwaggerUIResponse:
    content_type: str = field()
    status_code: int = field()
    
