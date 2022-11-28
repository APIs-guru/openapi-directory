from dataclasses import dataclass, field



@dataclass
class CollectionsLinkedPreprintsListPathParams:
    collection_id: str = field(metadata={'path_param': { 'field_name': 'collection_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CollectionsLinkedPreprintsListRequest:
    path_params: CollectionsLinkedPreprintsListPathParams = field()
    

@dataclass
class CollectionsLinkedPreprintsListResponse:
    content_type: str = field()
    status_code: int = field()
    
