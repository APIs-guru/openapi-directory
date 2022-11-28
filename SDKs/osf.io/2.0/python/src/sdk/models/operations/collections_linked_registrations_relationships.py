from dataclasses import dataclass, field
from typing import Any


@dataclass
class CollectionsLinkedRegistrationsRelationshipsPathParams:
    collection_id: str = field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectionsLinkedRegistrationsRelationshipsRequest:
    path_params: CollectionsLinkedRegistrationsRelationshipsPathParams = field()
    request: dict[str, Any] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CollectionsLinkedRegistrationsRelationshipsResponse:
    content_type: str = field()
    status_code: int = field()
    
