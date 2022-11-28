from dataclasses import dataclass, field



@dataclass
class GetToolsMetricsPrometheusResponse:
    content_type: str = field()
    status_code: int = field()
    
