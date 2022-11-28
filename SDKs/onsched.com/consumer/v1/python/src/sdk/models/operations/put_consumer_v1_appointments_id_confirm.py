from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PutConsumerV1AppointmentsIDConfirmPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutConsumerV1AppointmentsIDConfirmQueryParams:
    undo: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'undo', 'style': 'form', 'explode': True }})
    

@dataclass
class PutConsumerV1AppointmentsIDConfirmRequest:
    path_params: PutConsumerV1AppointmentsIDConfirmPathParams = field()
    query_params: PutConsumerV1AppointmentsIDConfirmQueryParams = field()
    

@dataclass
class PutConsumerV1AppointmentsIDConfirmResponse:
    content_type: str = field()
    status_code: int = field()
    
