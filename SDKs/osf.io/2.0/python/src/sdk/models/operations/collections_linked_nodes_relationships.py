from dataclasses import dataclass, field
from typing import Any


@dataclass
class CollectionsLinkedNodesRelationshipsPathParams:
    collection_id: str = field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectionsLinkedNodesRelationshipsRequest:
    path_params: CollectionsLinkedNodesRelationshipsPathParams = field()
    request: dict[str, Any] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CollectionsLinkedNodesRelationshipsResponse:
    content_type: str = field()
    status_code: int = field()
    
