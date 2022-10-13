from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteSetupV1ResourcesIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSetupV1ResourcesIDRequest:
    path_params: DeleteSetupV1ResourcesIDPathParams = field(default=None)
    

@dataclass
class DeleteSetupV1ResourcesIDResponse:
    content_type: str = field(default=None)
    resource_view_model: Optional[shared.ResourceViewModel] = field(default=None)
    status_code: int = field(default=None)
    
