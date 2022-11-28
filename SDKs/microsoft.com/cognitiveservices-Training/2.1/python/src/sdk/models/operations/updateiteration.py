from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateIterationPathParams:
    iteration_id: str = field(metadata={'path_param': { 'field_name': 'iterationId', 'style': 'simple', 'explode': False }})
    project_id: str = field(metadata={'path_param': { 'field_name': 'projectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateIterationHeaders:
    training_key: str = field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateIterationRequestsInput:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    iteration: Optional[shared.IterationInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    iteration1: Optional[shared.IterationInput] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    iteration2: Optional[shared.IterationInput] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateIterationRequest:
    headers: UpdateIterationHeaders = field()
    path_params: UpdateIterationPathParams = field()
    request: UpdateIterationRequestsInput = field()
    

@dataclass
class UpdateIterationResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    iteration: Optional[shared.Iteration] = field(default=None)
    
