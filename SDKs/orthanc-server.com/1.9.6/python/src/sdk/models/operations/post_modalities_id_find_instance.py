from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostModalitiesIDFindInstancePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostModalitiesIDFindInstanceRequest:
    path_params: PostModalitiesIDFindInstancePathParams = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostModalitiesIDFindInstanceResponse:
    content_type: str = field()
    status_code: int = field()
    post_modalities_id_find_instance_200_application_json_any: Optional[Any] = field(default=None)
    
