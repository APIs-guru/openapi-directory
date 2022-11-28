from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class PutSetupV1ServicesIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSetupV1ServicesIDRequests:
    service_update_model: Optional[shared.ServiceUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    service_update_model1: Optional[shared.ServiceUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    service_update_model2: Optional[shared.ServiceUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    service_update_model3: Optional[shared.ServiceUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutSetupV1ServicesIDRequest:
    path_params: PutSetupV1ServicesIDPathParams = field()
    request: Optional[PutSetupV1ServicesIDRequests] = field(default=None)
    

@dataclass
class PutSetupV1ServicesIDResponse:
    content_type: str = field()
    status_code: int = field()
    service_view_model: Optional[shared.ServiceViewModel] = field(default=None)
    
