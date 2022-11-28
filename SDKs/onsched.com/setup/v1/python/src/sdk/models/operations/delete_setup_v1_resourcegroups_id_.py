from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteSetupV1ResourcegroupsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSetupV1ResourcegroupsIDRequest:
    path_params: DeleteSetupV1ResourcegroupsIDPathParams = field()
    

@dataclass
class DeleteSetupV1ResourcegroupsIDResponse:
    content_type: str = field()
    status_code: int = field()
    resource_group_view_model: Optional[shared.ResourceGroupViewModel] = field(default=None)
    
