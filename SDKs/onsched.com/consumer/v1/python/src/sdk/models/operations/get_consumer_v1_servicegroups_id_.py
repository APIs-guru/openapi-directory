from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetConsumerV1ServicegroupsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConsumerV1ServicegroupsIDRequest:
    path_params: GetConsumerV1ServicegroupsIDPathParams = field(default=None)
    

@dataclass
class GetConsumerV1ServicegroupsIDResponse:
    content_type: str = field(default=None)
    service_group_view_model: Optional[shared.ServiceGroupViewModel] = field(default=None)
    status_code: int = field(default=None)
    
