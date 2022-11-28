from dataclasses import dataclass, field



@dataclass
class GetXMLResponse:
    content_type: str = field()
    status_code: int = field()
    
