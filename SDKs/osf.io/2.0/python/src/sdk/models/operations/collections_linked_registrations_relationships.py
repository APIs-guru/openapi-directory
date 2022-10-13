from dataclasses import dataclass, field
from typing import Any


@dataclass
class CollectionsLinkedRegistrationsRelationshipsPathParams:
    collection_id: str = field(default=None, metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectionsLinkedRegistrationsRelationshipsRequest:
    path_params: CollectionsLinkedRegistrationsRelationshipsPathParams = field(default=None)
    request: dict[str, Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CollectionsLinkedRegistrationsRelationshipsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
