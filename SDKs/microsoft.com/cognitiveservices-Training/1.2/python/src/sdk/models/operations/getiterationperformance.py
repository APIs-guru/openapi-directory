from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetIterationPerformancePathParams:
    iteration_id: str = field(metadata={'path_param': { 'field_name': 'iterationId', 'style': 'simple', 'explode': False }})
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIterationPerformanceQueryParams:
    threshold: float = field(metadata={'query_param': { 'field_name': 'threshold', 'style': 'form', 'explode': True }})
    

@dataclass
class GetIterationPerformanceHeaders:
    training_key: str = field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIterationPerformanceRequest:
    headers: GetIterationPerformanceHeaders = field()
    path_params: GetIterationPerformancePathParams = field()
    query_params: GetIterationPerformanceQueryParams = field()
    

@dataclass
class GetIterationPerformanceResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    iteration_performance: Optional[shared.IterationPerformance] = field(default=None)
    
