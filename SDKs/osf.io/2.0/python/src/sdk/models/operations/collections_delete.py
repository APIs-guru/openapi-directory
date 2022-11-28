from dataclasses import dataclass, field



@dataclass
class CollectionsDeletePathParams:
    collection_id: str = field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectionsDeleteRequest:
    path_params: CollectionsDeletePathParams = field()
    

@dataclass
class CollectionsDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
