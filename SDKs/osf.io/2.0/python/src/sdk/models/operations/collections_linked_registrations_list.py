from dataclasses import dataclass, field
from typing import List


@dataclass
class CollectionsLinkedRegistrationsListPathParams:
    collection_id: str = field(default=None, metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectionsLinkedRegistrationsListRequest:
    path_params: CollectionsLinkedRegistrationsListPathParams = field(default=None)
    

@dataclass
class CollectionsLinkedRegistrationsListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
