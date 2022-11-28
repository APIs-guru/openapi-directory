from dataclasses import dataclass, field



@dataclass
class CircuitsChoicesListResponse:
    content_type: str = field()
    status_code: int = field()
    
