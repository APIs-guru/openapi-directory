from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutSetupV1ResourcegroupsIDRecoverPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSetupV1ResourcegroupsIDRecoverRequest:
    path_params: PutSetupV1ResourcegroupsIDRecoverPathParams = field(default=None)
    

@dataclass
class PutSetupV1ResourcegroupsIDRecoverResponse:
    content_type: str = field(default=None)
    resource_view_model: Optional[shared.ResourceViewModel] = field(default=None)
    status_code: int = field(default=None)
    
