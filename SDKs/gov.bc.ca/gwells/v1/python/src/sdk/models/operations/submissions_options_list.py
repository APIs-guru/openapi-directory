from dataclasses import dataclass, field



@dataclass
class SubmissionsOptionsListResponse:
    content_type: str = field()
    status_code: int = field()
    
