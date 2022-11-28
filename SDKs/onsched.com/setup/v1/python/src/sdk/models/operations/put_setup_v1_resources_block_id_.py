from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class PutSetupV1ResourcesBlockIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSetupV1ResourcesBlockIDRequests:
    resource_block_update_model: Optional[shared.ResourceBlockUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    resource_block_update_model1: Optional[shared.ResourceBlockUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    resource_block_update_model2: Optional[shared.ResourceBlockUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    resource_block_update_model3: Optional[shared.ResourceBlockUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutSetupV1ResourcesBlockIDRequest:
    path_params: PutSetupV1ResourcesBlockIDPathParams = field()
    request: Optional[PutSetupV1ResourcesBlockIDRequests] = field(default=None)
    

@dataclass
class PutSetupV1ResourcesBlockIDResponse:
    content_type: str = field()
    status_code: int = field()
    resource_block_view_model: Optional[shared.ResourceBlockViewModel] = field(default=None)
    
