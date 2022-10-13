from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetResourcesMediaIDPreviewJpgPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourcesMediaIDPreviewJpgRequest:
    path_params: GetResourcesMediaIDPreviewJpgPathParams = field(default=None)
    

@dataclass
class GetResourcesMediaIDPreviewJpgResponse:
    content_type: str = field(default=None)
    get_resources_media_id_preview_jpg_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
