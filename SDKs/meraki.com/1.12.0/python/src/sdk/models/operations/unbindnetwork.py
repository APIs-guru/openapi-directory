from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class UnbindNetworkPathParams:
    network_id: str = field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnbindNetworkRequest:
    path_params: UnbindNetworkPathParams = field()
    

@dataclass
class UnbindNetworkResponse:
    content_type: str = field()
    status_code: int = field()
    unbind_network_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
