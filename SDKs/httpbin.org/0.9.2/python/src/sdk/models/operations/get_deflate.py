from dataclasses import dataclass, field



@dataclass
class GetDeflateResponse:
    content_type: str = field()
    status_code: int = field()
    
