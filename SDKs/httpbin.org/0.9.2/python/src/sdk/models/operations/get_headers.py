from dataclasses import dataclass, field



@dataclass
class GetHeadersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
