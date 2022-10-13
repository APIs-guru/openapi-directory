from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetModalitiesIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModalitiesIDRequest:
    path_params: GetModalitiesIDPathParams = field(default=None)
    

@dataclass
class GetModalitiesIDResponse:
    content_type: str = field(default=None)
    get_modalities_id_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
