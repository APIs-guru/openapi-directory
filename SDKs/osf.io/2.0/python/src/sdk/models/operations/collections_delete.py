from dataclasses import dataclass, field



@dataclass
class CollectionsDeletePathParams:
    collection_id: str = field(default=None, metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectionsDeleteRequest:
    path_params: CollectionsDeletePathParams = field(default=None)
    

@dataclass
class CollectionsDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
