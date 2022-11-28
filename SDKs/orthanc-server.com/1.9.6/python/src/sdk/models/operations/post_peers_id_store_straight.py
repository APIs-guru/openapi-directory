from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostPeersIDStoreStraightPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPeersIDStoreStraightRequest:
    path_params: PostPeersIDStoreStraightPathParams = field()
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/dicom' }})
    

@dataclass
class PostPeersIDStoreStraightResponse:
    content_type: str = field()
    status_code: int = field()
    post_peers_id_store_straight_200_application_json_any: Optional[Any] = field(default=None)
    
