from dataclasses import dataclass, field



@dataclass
class CollectionsMetadataRegistrationsListPathParams:
    collection_id: str = field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectionsMetadataRegistrationsListRequest:
    path_params: CollectionsMetadataRegistrationsListPathParams = field()
    

@dataclass
class CollectionsMetadataRegistrationsListResponse:
    content_type: str = field()
    status_code: int = field()
    
