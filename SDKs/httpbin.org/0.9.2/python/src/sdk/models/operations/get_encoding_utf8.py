from dataclasses import dataclass, field



@dataclass
class GetEncodingUTF8Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
