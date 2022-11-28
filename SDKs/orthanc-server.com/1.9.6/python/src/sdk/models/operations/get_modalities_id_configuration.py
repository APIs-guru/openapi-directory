from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetModalitiesIDConfigurationPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModalitiesIDConfigurationRequest:
    path_params: GetModalitiesIDConfigurationPathParams = field()
    

@dataclass
class GetModalitiesIDConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    get_modalities_id_configuration_200_application_json_any: Optional[Any] = field(default=None)
    
