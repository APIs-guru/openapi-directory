from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetResourcesMediaIDYoutubeMetaDataJSONPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResourcesMediaIDYoutubeMetaDataJSONRequest:
    path_params: GetResourcesMediaIDYoutubeMetaDataJSONPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetResourcesMediaIDYoutubeMetaDataJSON200ApplicationJSON:
    callback: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'callback' }})
    meta: Optional[shared.Meta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    results: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass
class GetResourcesMediaIDYoutubeMetaDataJSONResponse:
    content_type: str = field(default=None)
    get_resources_media_id_youtube_meta_data_json_200_application_json_object: Optional[GetResourcesMediaIDYoutubeMetaDataJSON200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
