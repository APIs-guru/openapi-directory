from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetForecastStatusJobIDPathParams:
    job_id: int = field(default=None, metadata={'path_param': { 'field_name': 'jobId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetForecastStatusJobIDHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetForecastStatusJobIDRequest:
    path_params: GetForecastStatusJobIDPathParams = field(default=None)
    headers: GetForecastStatusJobIDHeaders = field(default=None)
    

@dataclass
class GetForecastStatusJobIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
