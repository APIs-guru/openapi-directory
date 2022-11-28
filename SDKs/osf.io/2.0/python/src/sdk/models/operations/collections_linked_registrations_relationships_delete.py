from dataclasses import dataclass, field
from typing import Any


@dataclass
class CollectionsLinkedRegistrationsRelationshipsDeletePathParams:
    collection_id: str = field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectionsLinkedRegistrationsRelationshipsDeleteRequest:
    path_params: CollectionsLinkedRegistrationsRelationshipsDeletePathParams = field()
    request: dict[str, Any] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CollectionsLinkedRegistrationsRelationshipsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
