from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostSetupV1ResourcegroupsRequests:
    resource_group_input_model: Optional[shared.ResourceGroupInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    resource_group_input_model1: Optional[shared.ResourceGroupInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    resource_group_input_model2: Optional[shared.ResourceGroupInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    resource_group_input_model3: Optional[shared.ResourceGroupInputModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostSetupV1ResourcegroupsRequest:
    request: Optional[PostSetupV1ResourcegroupsRequests] = field(default=None)
    

@dataclass
class PostSetupV1ResourcegroupsResponse:
    content_type: str = field()
    status_code: int = field()
    resource_group_view_model: Optional[shared.ResourceGroupViewModel] = field(default=None)
    
