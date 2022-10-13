from dataclasses import dataclass, field



@dataclass
class CollectionsLinkedRegistrationsRelationshipsCreatePathParams:
    collection_id: str = field(default=None, metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectionsLinkedRegistrationsRelationshipsCreateRequest:
    path_params: CollectionsLinkedRegistrationsRelationshipsCreatePathParams = field(default=None)
    

@dataclass
class CollectionsLinkedRegistrationsRelationshipsCreateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
