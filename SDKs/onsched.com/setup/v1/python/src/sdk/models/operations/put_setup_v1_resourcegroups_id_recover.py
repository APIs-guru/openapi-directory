from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutSetupV1ResourcegroupsIDRecoverPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSetupV1ResourcegroupsIDRecoverRequest:
    path_params: PutSetupV1ResourcegroupsIDRecoverPathParams = field()
    

@dataclass
class PutSetupV1ResourcegroupsIDRecoverResponse:
    content_type: str = field()
    status_code: int = field()
    resource_view_model: Optional[shared.ResourceViewModel] = field(default=None)
    
