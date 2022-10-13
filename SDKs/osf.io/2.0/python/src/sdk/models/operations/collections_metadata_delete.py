from dataclasses import dataclass, field



@dataclass
class CollectionsMetadataDeletePathParams:
    cgm_id: str = field(default=None, metadata={'path_param': { 'field_name': 'cgm_id', 'style': 'simple', 'explode': False }})
    collection_id: str = field(default=None, metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectionsMetadataDeleteRequest:
    path_params: CollectionsMetadataDeletePathParams = field(default=None)
    

@dataclass
class CollectionsMetadataDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
