from dataclasses import dataclass, field



@dataclass
class GetActionStatusShowResponse:
    content_type: str = field()
    status_code: int = field()
    
