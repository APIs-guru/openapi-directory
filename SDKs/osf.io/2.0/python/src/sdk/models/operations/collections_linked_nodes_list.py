from dataclasses import dataclass, field
from typing import List


@dataclass
class CollectionsLinkedNodesListPathParams:
    collection_id: str = field(default=None, metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectionsLinkedNodesListRequest:
    path_params: CollectionsLinkedNodesListPathParams = field(default=None)
    

@dataclass
class CollectionsLinkedNodesListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
