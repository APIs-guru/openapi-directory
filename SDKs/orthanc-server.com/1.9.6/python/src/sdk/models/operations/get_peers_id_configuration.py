from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetPeersIDConfigurationPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPeersIDConfigurationRequest:
    path_params: GetPeersIDConfigurationPathParams = field(default=None)
    

@dataclass
class GetPeersIDConfigurationResponse:
    content_type: str = field(default=None)
    get_peers_id_configuration_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
