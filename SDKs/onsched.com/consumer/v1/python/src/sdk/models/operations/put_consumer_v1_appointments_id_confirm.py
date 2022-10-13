from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PutConsumerV1AppointmentsIDConfirmPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutConsumerV1AppointmentsIDConfirmQueryParams:
    undo: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'undo', 'style': 'form', 'explode': True }})
    

@dataclass
class PutConsumerV1AppointmentsIDConfirmRequest:
    path_params: PutConsumerV1AppointmentsIDConfirmPathParams = field(default=None)
    query_params: PutConsumerV1AppointmentsIDConfirmQueryParams = field(default=None)
    

@dataclass
class PutConsumerV1AppointmentsIDConfirmResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
