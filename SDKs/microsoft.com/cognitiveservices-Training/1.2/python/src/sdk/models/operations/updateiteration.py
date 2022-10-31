from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateIterationPathParams:
    iteration_id: str = field(default=None, metadata={'path_param': { 'field_name': 'iterationId', 'style': 'simple', 'explode': False }})
    project_id: str = field(default=None, metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateIterationHeaders:
    training_key: str = field(default=None, metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateIterationRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    iteration: Optional[shared.Iteration] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    iteration1: Optional[shared.Iteration] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    iteration2: Optional[shared.Iteration] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class UpdateIterationRequest:
    path_params: UpdateIterationPathParams = field(default=None)
    headers: UpdateIterationHeaders = field(default=None)
    request: UpdateIterationRequests = field(default=None)
    

@dataclass
class UpdateIterationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    iteration: Optional[shared.Iteration] = field(default=None)
    status_code: int = field(default=None)
    
