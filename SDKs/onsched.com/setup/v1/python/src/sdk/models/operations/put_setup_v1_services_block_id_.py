from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class PutSetupV1ServicesBlockIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSetupV1ServicesBlockIDRequests:
    service_block_update_model: Optional[shared.ServiceBlockUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    service_block_update_model1: Optional[shared.ServiceBlockUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    service_block_update_model2: Optional[shared.ServiceBlockUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    service_block_update_model3: Optional[shared.ServiceBlockUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutSetupV1ServicesBlockIDRequest:
    path_params: PutSetupV1ServicesBlockIDPathParams = field()
    request: Optional[PutSetupV1ServicesBlockIDRequests] = field(default=None)
    

@dataclass
class PutSetupV1ServicesBlockIDResponse:
    content_type: str = field()
    status_code: int = field()
    service_block_view_model: Optional[shared.ServiceBlockViewModel] = field(default=None)
    
