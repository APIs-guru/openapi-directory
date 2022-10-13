from dataclasses import dataclass, field



@dataclass
class CollectionsCollectedMetadataPathParams:
    cgm_id: str = field(default=None, metadata={'path_param': { 'field_name': 'cgm_id', 'style': 'simple', 'explode': False }})
    collection_id: str = field(default=None, metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectionsCollectedMetadataRequest:
    path_params: CollectionsCollectedMetadataPathParams = field(default=None)
    

@dataclass
class CollectionsCollectedMetadataResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
