from dataclasses import dataclass, field
from typing import Any


@dataclass
class CollectionsLinkedRegistrationsRelationshipsDeletePathParams:
    collection_id: str = field(default=None, metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectionsLinkedRegistrationsRelationshipsDeleteRequest:
    path_params: CollectionsLinkedRegistrationsRelationshipsDeletePathParams = field(default=None)
    request: dict[str, Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CollectionsLinkedRegistrationsRelationshipsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
