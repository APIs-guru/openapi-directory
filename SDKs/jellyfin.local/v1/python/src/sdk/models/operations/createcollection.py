from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreateCollectionQueryParams:
    ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    is_locked: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isLocked', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    parent_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'parentId', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateCollectionSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CreateCollectionRequest:
    query_params: CreateCollectionQueryParams = field(default=None)
    security: CreateCollectionSecurity = field(default=None)
    

@dataclass
class CreateCollectionResponse:
    collection_creation_result: Optional[shared.CollectionCreationResult] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
