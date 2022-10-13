from dataclasses import dataclass, field
from typing import Any


@dataclass
class CollectionsAddMetadataPathParams:
    collection_id: str = field(default=None, metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectionsAddMetadataRequest:
    path_params: CollectionsAddMetadataPathParams = field(default=None)
    request: dict[str, Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CollectionsAddMetadataResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
