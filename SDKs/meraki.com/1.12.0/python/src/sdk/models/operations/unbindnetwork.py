from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class UnbindNetworkPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnbindNetworkRequest:
    path_params: UnbindNetworkPathParams = field(default=None)
    

@dataclass
class UnbindNetworkResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    unbind_network_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
