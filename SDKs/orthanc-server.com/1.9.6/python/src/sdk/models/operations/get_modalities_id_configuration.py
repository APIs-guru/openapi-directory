from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetModalitiesIDConfigurationPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModalitiesIDConfigurationRequest:
    path_params: GetModalitiesIDConfigurationPathParams = field(default=None)
    

@dataclass
class GetModalitiesIDConfigurationResponse:
    content_type: str = field(default=None)
    get_modalities_id_configuration_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
