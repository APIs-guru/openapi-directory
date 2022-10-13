from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutConsumerV1AppointmentsIDBookPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutConsumerV1AppointmentsIDBookRequests:
    appointment_book_model: Optional[shared.AppointmentBookModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    appointment_book_model1: Optional[shared.AppointmentBookModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    appointment_book_model2: Optional[shared.AppointmentBookModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    appointment_book_model3: Optional[shared.AppointmentBookModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutConsumerV1AppointmentsIDBookRequest:
    path_params: PutConsumerV1AppointmentsIDBookPathParams = field(default=None)
    request: Optional[PutConsumerV1AppointmentsIDBookRequests] = field(default=None)
    

@dataclass
class PutConsumerV1AppointmentsIDBookResponse:
    appointment_view_model: Optional[shared.AppointmentViewModel] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
