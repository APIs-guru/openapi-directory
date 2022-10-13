from dataclasses import dataclass, field
from typing import Any


@dataclass
class CollectionsLinkedNodesRelationshipsDeletePathParams:
    collection_id: str = field(default=None, metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectionsLinkedNodesRelationshipsDeleteRequest:
    path_params: CollectionsLinkedNodesRelationshipsDeletePathParams = field(default=None)
    request: dict[str, Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CollectionsLinkedNodesRelationshipsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
