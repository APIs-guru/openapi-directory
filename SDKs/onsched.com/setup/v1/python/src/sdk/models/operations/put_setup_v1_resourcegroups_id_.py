from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class PutSetupV1ResourcegroupsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSetupV1ResourcegroupsIDRequests:
    resource_group_update_model: Optional[shared.ResourceGroupUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    resource_group_update_model1: Optional[shared.ResourceGroupUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    resource_group_update_model2: Optional[shared.ResourceGroupUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    resource_group_update_model3: Optional[shared.ResourceGroupUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutSetupV1ResourcegroupsIDRequest:
    path_params: PutSetupV1ResourcegroupsIDPathParams = field()
    request: Optional[PutSetupV1ResourcegroupsIDRequests] = field(default=None)
    

@dataclass
class PutSetupV1ResourcegroupsIDResponse:
    content_type: str = field()
    status_code: int = field()
    resource_group_view_model: Optional[shared.ResourceGroupViewModel] = field(default=None)
    
