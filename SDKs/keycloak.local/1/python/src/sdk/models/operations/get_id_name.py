from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetIDNamePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetIDNameRequest:
    path_params: GetIDNamePathParams = field()
    

@dataclass
class GetIDNameResponse:
    content_type: str = field()
    status_code: int = field()
    get_id_name_2_xx_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
