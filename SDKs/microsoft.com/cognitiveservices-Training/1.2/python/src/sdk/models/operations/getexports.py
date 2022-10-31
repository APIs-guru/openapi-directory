from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetExportsPathParams:
    iteration_id: str = field(default=None, metadata={'path_param': { 'field_name': 'iterationId', 'style': 'simple', 'explode': False }})
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetExportsHeaders:
    training_key: str = field(default=None, metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetExportsRequest:
    path_params: GetExportsPathParams = field(default=None)
    headers: GetExportsHeaders = field(default=None)
    

@dataclass
class GetExportsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    exports: Optional[List[shared.Export]] = field(default=None)
    status_code: int = field(default=None)
    
