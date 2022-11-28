from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetPluginsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPluginsIDRequest:
    path_params: GetPluginsIDPathParams = field()
    

@dataclass
class GetPluginsIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_plugins_id_200_application_json_any: Optional[Any] = field(default=None)
    
