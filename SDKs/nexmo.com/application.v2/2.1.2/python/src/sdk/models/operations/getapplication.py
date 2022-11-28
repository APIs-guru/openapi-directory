from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetApplicationPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetApplicationRequest:
    path_params: GetApplicationPathParams = field()
    

@dataclass
class GetApplicationResponse:
    content_type: str = field()
    status_code: int = field()
    application_response: Optional[Any] = field(default=None)
    get_application_401_application_json_any: Optional[Any] = field(default=None)
    get_application_404_application_json_any: Optional[Any] = field(default=None)
    get_application_405_application_json_any: Optional[Any] = field(default=None)
    get_application_406_application_json_any: Optional[Any] = field(default=None)
    
