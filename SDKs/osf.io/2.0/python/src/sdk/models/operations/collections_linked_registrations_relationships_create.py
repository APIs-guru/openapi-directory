from dataclasses import dataclass, field



@dataclass
class CollectionsLinkedRegistrationsRelationshipsCreatePathParams:
    collection_id: str = field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectionsLinkedRegistrationsRelationshipsCreateRequest:
    path_params: CollectionsLinkedRegistrationsRelationshipsCreatePathParams = field()
    

@dataclass
class CollectionsLinkedRegistrationsRelationshipsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    
