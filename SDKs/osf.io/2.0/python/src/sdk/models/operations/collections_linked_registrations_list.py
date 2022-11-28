from dataclasses import dataclass, field



@dataclass
class CollectionsLinkedRegistrationsListPathParams:
    collection_id: str = field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectionsLinkedRegistrationsListRequest:
    path_params: CollectionsLinkedRegistrationsListPathParams = field()
    

@dataclass
class CollectionsLinkedRegistrationsListResponse:
    content_type: str = field()
    status_code: int = field()
    
