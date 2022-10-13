from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetIDNamePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIDNameRequest:
    path_params: GetIDNamePathParams = field(default=None)
    

@dataclass
class GetIDNameResponse:
    content_type: str = field(default=None)
    get_id_name_2_xx_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
