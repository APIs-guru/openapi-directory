from dataclasses import dataclass, field
from typing import List
from sdk.models import shared


@dataclass
class AddToCollectionPathParams:
    collection_id: str = field(metadata={'path_param': { 'field_name': 'collectionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddToCollectionQueryParams:
    ids: List[str] = field(metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    

@dataclass
class AddToCollectionSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AddToCollectionRequest:
    path_params: AddToCollectionPathParams = field()
    query_params: AddToCollectionQueryParams = field()
    security: AddToCollectionSecurity = field()
    

@dataclass
class AddToCollectionResponse:
    content_type: str = field()
    status_code: int = field()
    
