from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetResourcesMediaIDThumbnailJpgPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourcesMediaIDThumbnailJpgRequest:
    path_params: GetResourcesMediaIDThumbnailJpgPathParams = field(default=None)
    

@dataclass
class GetResourcesMediaIDThumbnailJpgResponse:
    content_type: str = field(default=None)
    get_resources_media_id_thumbnail_jpg_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
