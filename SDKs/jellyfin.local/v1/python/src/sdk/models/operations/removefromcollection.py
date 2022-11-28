from dataclasses import dataclass, field
from typing import List
from sdk.models import shared


@dataclass
class RemoveFromCollectionPathParams:
    collection_id: str = field(metadata={'path_param': { 'field_name': 'collectionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveFromCollectionQueryParams:
    ids: List[str] = field(metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    

@dataclass
class RemoveFromCollectionSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class RemoveFromCollectionRequest:
    path_params: RemoveFromCollectionPathParams = field()
    query_params: RemoveFromCollectionQueryParams = field()
    security: RemoveFromCollectionSecurity = field()
    

@dataclass
class RemoveFromCollectionResponse:
    content_type: str = field()
    status_code: int = field()
    
