from dataclasses import dataclass, field



@dataclass
class CollectionsLinkedNodesListPathParams:
    collection_id: str = field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectionsLinkedNodesListRequest:
    path_params: CollectionsLinkedNodesListPathParams = field()
    

@dataclass
class CollectionsLinkedNodesListResponse:
    content_type: str = field()
    status_code: int = field()
    
