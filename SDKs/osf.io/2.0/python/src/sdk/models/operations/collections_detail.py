from dataclasses import dataclass, field



@dataclass
class CollectionsDetailPathParams:
    collection_id: str = field(default=None, metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectionsDetailRequest:
    path_params: CollectionsDetailPathParams = field(default=None)
    

@dataclass
class CollectionsDetailResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
