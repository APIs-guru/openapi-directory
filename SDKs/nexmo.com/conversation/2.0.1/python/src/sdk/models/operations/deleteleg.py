from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteLegPathParams:
    leg_id: str = field(metadata={'path_param': { 'field_name': 'leg_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteLegRequest:
    path_params: DeleteLegPathParams = field()
    

@dataclass
class DeleteLegResponse:
    content_type: str = field()
    status_code: int = field()
    delete_leg_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
