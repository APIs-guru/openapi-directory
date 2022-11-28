from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetForecastResultJobIDPathParams:
    job_id: int = field(metadata={'path_param': { 'field_name': 'jobId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetForecastResultJobIDHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetForecastResultJobIDRequest:
    headers: GetForecastResultJobIDHeaders = field()
    path_params: GetForecastResultJobIDPathParams = field()
    

@dataclass
class GetForecastResultJobIDResponse:
    content_type: str = field()
    status_code: int = field()
    
