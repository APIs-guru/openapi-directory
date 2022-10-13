from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteApplicationPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteApplicationRequest:
    path_params: DeleteApplicationPathParams = field(default=None)
    

@dataclass
class DeleteApplicationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_application_401_application_json_any: Optional[Any] = field(default=None)
    delete_application_404_application_json_any: Optional[Any] = field(default=None)
    delete_application_405_application_json_any: Optional[Any] = field(default=None)
    delete_application_406_application_json_any: Optional[Any] = field(default=None)
    
