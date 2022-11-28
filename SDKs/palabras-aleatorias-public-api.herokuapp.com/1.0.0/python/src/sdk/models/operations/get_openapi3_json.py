from dataclasses import dataclass, field



@dataclass
class GetOpenapi3JSONResponse:
    content_type: str = field()
    status_code: int = field()
    
