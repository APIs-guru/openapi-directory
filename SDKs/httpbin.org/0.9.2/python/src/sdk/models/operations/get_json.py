from dataclasses import dataclass, field



@dataclass
class GetJSONResponse:
    content_type: str = field()
    status_code: int = field()
    
