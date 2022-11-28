from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetExportsPathParams:
    iteration_id: str = field(metadata={'path_param': { 'field_name': 'iterationId', 'style': 'simple', 'explode': False }})
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetExportsHeaders:
    training_key: str = field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetExportsRequest:
    headers: GetExportsHeaders = field()
    path_params: GetExportsPathParams = field()
    

@dataclass
class GetExportsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    exports: Optional[List[shared.Export]] = field(default=None)
    
