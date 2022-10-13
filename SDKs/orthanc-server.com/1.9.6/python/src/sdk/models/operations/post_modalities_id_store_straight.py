from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostModalitiesIDStoreStraightPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostModalitiesIDStoreStraightRequest:
    path_params: PostModalitiesIDStoreStraightPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/dicom' }})
    

@dataclass
class PostModalitiesIDStoreStraightResponse:
    content_type: str = field(default=None)
    post_modalities_id_store_straight_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
