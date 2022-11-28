from dataclasses import dataclass, field



@dataclass
class GetEncodingUTF8Response:
    content_type: str = field()
    status_code: int = field()
    
