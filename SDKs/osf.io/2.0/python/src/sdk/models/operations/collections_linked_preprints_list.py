from dataclasses import dataclass, field
from typing import List


@dataclass
class CollectionsLinkedPreprintsListPathParams:
    collection_id: str = field(default=None, metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectionsLinkedPreprintsListRequest:
    path_params: CollectionsLinkedPreprintsListPathParams = field(default=None)
    

@dataclass
class CollectionsLinkedPreprintsListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
