from dataclasses import dataclass, field



@dataclass
class CollectionsLinkedNodesRelationshipsCreatePathParams:
    collection_id: str = field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectionsLinkedNodesRelationshipsCreateRequest:
    path_params: CollectionsLinkedNodesRelationshipsCreatePathParams = field()
    

@dataclass
class CollectionsLinkedNodesRelationshipsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    
