from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetForecastResultJobIDPathParams:
    job_id: int = field(default=None, metadata={'path_param': { 'field_name': 'jobId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetForecastResultJobIDHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetForecastResultJobIDRequest:
    path_params: GetForecastResultJobIDPathParams = field(default=None)
    headers: GetForecastResultJobIDHeaders = field(default=None)
    

@dataclass
class GetForecastResultJobIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
