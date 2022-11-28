from dataclasses import dataclass, field



@dataclass
class CollectionsCollectedMetadataPathParams:
    cgm_id: str = field(metadata={'path_param': { 'field_name': 'cgm_id', 'style': 'simple', 'explode': False }})
    collection_id: str = field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectionsCollectedMetadataRequest:
    path_params: CollectionsCollectedMetadataPathParams = field()
    

@dataclass
class CollectionsCollectedMetadataResponse:
    content_type: str = field()
    status_code: int = field()
    
