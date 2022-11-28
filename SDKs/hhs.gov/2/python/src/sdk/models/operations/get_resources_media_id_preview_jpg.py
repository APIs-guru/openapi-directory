from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetResourcesMediaIDPreviewJpgPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourcesMediaIDPreviewJpgRequest:
    path_params: GetResourcesMediaIDPreviewJpgPathParams = field()
    

@dataclass
class GetResourcesMediaIDPreviewJpgResponse:
    content_type: str = field()
    status_code: int = field()
    get_resources_media_id_preview_jpg_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
