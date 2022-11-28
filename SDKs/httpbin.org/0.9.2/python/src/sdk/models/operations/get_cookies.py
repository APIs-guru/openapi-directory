from dataclasses import dataclass, field



@dataclass
class GetCookiesResponse:
    content_type: str = field()
    status_code: int = field()
    
