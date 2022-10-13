from dataclasses import dataclass, field
from typing import List


@dataclass
class RemoveFromCollectionPathParams:
    collection_id: str = field(default=None, metadata={'path_param': { 'field_name': 'collectionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveFromCollectionQueryParams:
    ids: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    

@dataclass
class RemoveFromCollectionSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class RemoveFromCollectionRequest:
    path_params: RemoveFromCollectionPathParams = field(default=None)
    query_params: RemoveFromCollectionQueryParams = field(default=None)
    security: RemoveFromCollectionSecurity = field(default=None)
    

@dataclass
class RemoveFromCollectionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
