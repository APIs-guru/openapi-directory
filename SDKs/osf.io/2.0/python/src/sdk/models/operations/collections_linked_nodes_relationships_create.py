from dataclasses import dataclass, field



@dataclass
class CollectionsLinkedNodesRelationshipsCreatePathParams:
    collection_id: str = field(default=None, metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectionsLinkedNodesRelationshipsCreateRequest:
    path_params: CollectionsLinkedNodesRelationshipsCreatePathParams = field(default=None)
    

@dataclass
class CollectionsLinkedNodesRelationshipsCreateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
