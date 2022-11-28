from dataclasses import dataclass, field



@dataclass
class GetDataStatsResponse:
    content_type: str = field()
    status_code: int = field()
    
