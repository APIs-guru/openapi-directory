from dataclasses import dataclass, field



@dataclass
class CollectionsMetadataSubjectsRelationshipsPathParams:
    cgm_id: str = field(metadata={'path_param': { 'field_name': 'cgm_id', 'style': 'simple', 'explode': False }})
    collection_id: str = field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectionsMetadataSubjectsRelationshipsRequest:
    path_params: CollectionsMetadataSubjectsRelationshipsPathParams = field()
    

@dataclass
class CollectionsMetadataSubjectsRelationshipsResponse:
    content_type: str = field()
    status_code: int = field()
    
