from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetModalitiesIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModalitiesIDRequest:
    path_params: GetModalitiesIDPathParams = field()
    

@dataclass
class GetModalitiesIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_modalities_id_200_application_json_any: Optional[Any] = field(default=None)
    
