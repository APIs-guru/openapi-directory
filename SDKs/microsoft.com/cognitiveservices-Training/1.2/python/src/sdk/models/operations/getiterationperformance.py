from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetIterationPerformancePathParams:
    iteration_id: str = field(default=None, metadata={'path_param': { 'field_name': 'iterationId', 'style': 'simple', 'explode': False }})
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIterationPerformanceQueryParams:
    threshold: float = field(default=None, metadata={'query_param': { 'field_name': 'threshold', 'style': 'form', 'explode': True }})
    

@dataclass
class GetIterationPerformanceHeaders:
    training_key: str = field(default=None, metadata={'header': { 'field_name': 'Training-Key' }})
    

@dataclass
class GetIterationPerformanceRequest:
    path_params: GetIterationPerformancePathParams = field(default=None)
    query_params: GetIterationPerformanceQueryParams = field(default=None)
    headers: GetIterationPerformanceHeaders = field(default=None)
    

@dataclass
class GetIterationPerformanceResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    iteration_performance: Optional[shared.IterationPerformance] = field(default=None)
    status_code: int = field(default=None)
    
