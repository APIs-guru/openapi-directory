from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetForecastStatusJobIDPathParams:
    job_id: int = field(metadata={'path_param': { 'field_name': 'jobId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetForecastStatusJobIDHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetForecastStatusJobIDRequest:
    headers: GetForecastStatusJobIDHeaders = field()
    path_params: GetForecastStatusJobIDPathParams = field()
    

@dataclass
class GetForecastStatusJobIDResponse:
    content_type: str = field()
    status_code: int = field()
    
