from dataclasses import dataclass, field



@dataclass
class CollectionsMetadataSubjectsRelationshipsPathParams:
    cgm_id: str = field(default=None, metadata={'path_param': { 'field_name': 'cgm_id', 'style': 'simple', 'explode': False }})
    collection_id: str = field(default=None, metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectionsMetadataSubjectsRelationshipsRequest:
    path_params: CollectionsMetadataSubjectsRelationshipsPathParams = field(default=None)
    

@dataclass
class CollectionsMetadataSubjectsRelationshipsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
