from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteLegPathParams:
    leg_id: str = field(default=None, metadata={'path_param': { 'field_name': 'leg_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteLegRequest:
    path_params: DeleteLegPathParams = field(default=None)
    

@dataclass
class DeleteLegResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_leg_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
