from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class SplitNetworkPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SplitNetworkRequest:
    path_params: SplitNetworkPathParams = field()
    

@dataclass
class SplitNetworkResponse:
    content_type: str = field()
    status_code: int = field()
    split_network_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
