from dataclasses import dataclass, field



@dataclass
class GetHeadersResponse:
    content_type: str = field()
    status_code: int = field()
    
