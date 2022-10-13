from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PutConsumerV1AppointmentsIDNoshowPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutConsumerV1AppointmentsIDNoshowRequests:
    appointment_no_show_model: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    appointment_no_show_model1: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    appointment_no_show_model2: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    appointment_no_show_model3: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutConsumerV1AppointmentsIDNoshowRequest:
    path_params: PutConsumerV1AppointmentsIDNoshowPathParams = field(default=None)
    request: Optional[PutConsumerV1AppointmentsIDNoshowRequests] = field(default=None)
    

@dataclass
class PutConsumerV1AppointmentsIDNoshowResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
