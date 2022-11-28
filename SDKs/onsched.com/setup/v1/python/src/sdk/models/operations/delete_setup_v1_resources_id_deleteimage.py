from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteSetupV1ResourcesIDDeleteimagePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSetupV1ResourcesIDDeleteimageRequest:
    path_params: DeleteSetupV1ResourcesIDDeleteimagePathParams = field()
    

@dataclass
class DeleteSetupV1ResourcesIDDeleteimageResponse:
    content_type: str = field()
    status_code: int = field()
    resource_view_model: Optional[shared.ResourceViewModel] = field(default=None)
    
