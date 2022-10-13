from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSetupV1ResourcegroupsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSetupV1ResourcegroupsIDRequest:
    path_params: GetSetupV1ResourcegroupsIDPathParams = field(default=None)
    

@dataclass
class GetSetupV1ResourcegroupsIDResponse:
    content_type: str = field(default=None)
    resource_group_view_model: Optional[shared.ResourceGroupViewModel] = field(default=None)
    status_code: int = field(default=None)
    
