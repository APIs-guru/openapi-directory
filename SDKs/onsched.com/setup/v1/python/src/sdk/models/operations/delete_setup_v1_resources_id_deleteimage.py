from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteSetupV1ResourcesIDDeleteimagePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSetupV1ResourcesIDDeleteimageRequest:
    path_params: DeleteSetupV1ResourcesIDDeleteimagePathParams = field(default=None)
    

@dataclass
class DeleteSetupV1ResourcesIDDeleteimageResponse:
    content_type: str = field(default=None)
    resource_view_model: Optional[shared.ResourceViewModel] = field(default=None)
    status_code: int = field(default=None)
    
