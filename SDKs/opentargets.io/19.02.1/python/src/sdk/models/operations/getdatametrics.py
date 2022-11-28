from dataclasses import dataclass, field



@dataclass
class GetDataMetricsResponse:
    content_type: str = field()
    status_code: int = field()
    
