from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExportIterationPathParams:
    iteration_id: str = field(default=None, metadata={'path_param': { 'field_name': 'iterationId', 'style': 'simple', 'explode': False }})
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExportIterationQueryParams:
    flavor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'flavor', 'style': 'form', 'explode': True }})
    platform: str = field(default=None, metadata={'query_param': { 'field_name': 'platform', 'style': 'form', 'explode': True }})
    

@dataclass
class ExportIterationHeaders:
    training_key: str = field(default=None, metadata={'header': { 'field_name': 'Training-Key' }})
    

@dataclass
class ExportIterationRequest:
    path_params: ExportIterationPathParams = field(default=None)
    query_params: ExportIterationQueryParams = field(default=None)
    headers: ExportIterationHeaders = field(default=None)
    

@dataclass
class ExportIterationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    export: Optional[shared.Export] = field(default=None)
    status_code: int = field(default=None)
    
