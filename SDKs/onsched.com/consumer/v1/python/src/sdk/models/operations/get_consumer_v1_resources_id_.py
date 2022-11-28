from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetConsumerV1ResourcesIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConsumerV1ResourcesIDRequest:
    path_params: GetConsumerV1ResourcesIDPathParams = field()
    

@dataclass
class GetConsumerV1ResourcesIDResponse:
    content_type: str = field()
    status_code: int = field()
    resource_view_model: Optional[shared.ResourceViewModel] = field(default=None)
    
