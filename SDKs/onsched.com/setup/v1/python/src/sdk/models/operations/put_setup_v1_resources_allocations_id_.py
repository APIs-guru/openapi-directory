from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class PutSetupV1ResourcesAllocationsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSetupV1ResourcesAllocationsIDRequests:
    resource_allocation_update_model: Optional[shared.ResourceAllocationUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    resource_allocation_update_model1: Optional[shared.ResourceAllocationUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    resource_allocation_update_model2: Optional[shared.ResourceAllocationUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    resource_allocation_update_model3: Optional[shared.ResourceAllocationUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutSetupV1ResourcesAllocationsIDRequest:
    path_params: PutSetupV1ResourcesAllocationsIDPathParams = field()
    request: Optional[PutSetupV1ResourcesAllocationsIDRequests] = field(default=None)
    

@dataclass
class PutSetupV1ResourcesAllocationsIDResponse:
    content_type: str = field()
    status_code: int = field()
    resource_block_view_model: Optional[shared.ResourceBlockViewModel] = field(default=None)
    
