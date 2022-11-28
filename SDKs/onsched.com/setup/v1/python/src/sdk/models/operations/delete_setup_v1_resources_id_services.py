from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteSetupV1ResourcesIDServicesPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSetupV1ResourcesIDServicesRequest:
    path_params: DeleteSetupV1ResourcesIDServicesPathParams = field()
    

@dataclass
class DeleteSetupV1ResourcesIDServicesResponse:
    content_type: str = field()
    status_code: int = field()
    resource_view_model: Optional[shared.ResourceViewModel] = field(default=None)
    
