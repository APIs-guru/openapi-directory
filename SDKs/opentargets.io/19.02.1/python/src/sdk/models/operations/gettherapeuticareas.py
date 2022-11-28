from dataclasses import dataclass, field



@dataclass
class GetTherapeuticAreasResponse:
    content_type: str = field()
    status_code: int = field()
    
