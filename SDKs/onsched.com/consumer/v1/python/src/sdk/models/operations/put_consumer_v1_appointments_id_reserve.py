from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutConsumerV1AppointmentsIDReservePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutConsumerV1AppointmentsIDReserveQueryParams:
    send_notifications: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'sendNotifications', 'style': 'form', 'explode': True }})
    

@dataclass
class PutConsumerV1AppointmentsIDReserveRequests:
    appointment_reserve_model: Optional[shared.AppointmentReserveModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    appointment_reserve_model1: Optional[shared.AppointmentReserveModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    appointment_reserve_model2: Optional[shared.AppointmentReserveModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    appointment_reserve_model3: Optional[shared.AppointmentReserveModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutConsumerV1AppointmentsIDReserveRequest:
    path_params: PutConsumerV1AppointmentsIDReservePathParams = field(default=None)
    query_params: PutConsumerV1AppointmentsIDReserveQueryParams = field(default=None)
    request: Optional[PutConsumerV1AppointmentsIDReserveRequests] = field(default=None)
    

@dataclass
class PutConsumerV1AppointmentsIDReserveResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
