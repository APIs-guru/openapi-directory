from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetPluginsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPluginsIDRequest:
    path_params: GetPluginsIDPathParams = field(default=None)
    

@dataclass
class GetPluginsIDResponse:
    content_type: str = field(default=None)
    get_plugins_id_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
