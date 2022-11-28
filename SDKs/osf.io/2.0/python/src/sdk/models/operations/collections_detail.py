from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CollectionsDetailPathParams:
    collection_id: str = field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectionsDetailRequest:
    path_params: CollectionsDetailPathParams = field()
    

@dataclass
class CollectionsDetailResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
