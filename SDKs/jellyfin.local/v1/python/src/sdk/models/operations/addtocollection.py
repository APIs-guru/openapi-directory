from dataclasses import dataclass, field
from typing import List


@dataclass
class AddToCollectionPathParams:
    collection_id: str = field(default=None, metadata={'path_param': { 'field_name': 'collectionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddToCollectionQueryParams:
    ids: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    

@dataclass
class AddToCollectionSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AddToCollectionRequest:
    path_params: AddToCollectionPathParams = field(default=None)
    query_params: AddToCollectionQueryParams = field(default=None)
    security: AddToCollectionSecurity = field(default=None)
    

@dataclass
class AddToCollectionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
