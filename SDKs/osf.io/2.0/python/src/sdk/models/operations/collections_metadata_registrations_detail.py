from dataclasses import dataclass, field



@dataclass
class CollectionsMetadataRegistrationsDetailPathParams:
    cgm_id: str = field(metadata={'path_param': { 'field_name': 'cgm_id', 'style': 'simple', 'explode': False }})
    collection_id: str = field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectionsMetadataRegistrationsDetailRequest:
    path_params: CollectionsMetadataRegistrationsDetailPathParams = field()
    

@dataclass
class CollectionsMetadataRegistrationsDetailResponse:
    content_type: str = field()
    status_code: int = field()
    
