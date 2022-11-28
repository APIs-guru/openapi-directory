from dataclasses import dataclass, field



@dataclass
class GetGzipResponse:
    content_type: str = field()
    status_code: int = field()
    
