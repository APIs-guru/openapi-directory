from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmComponentsPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmComponentsQueryParams:
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    parent: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'parent', 'style': 'form', 'explode': True }})
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRealmComponentsRequest:
    path_params: GetRealmComponentsPathParams = field()
    query_params: GetRealmComponentsQueryParams = field()
    

@dataclass
class GetRealmComponentsResponse:
    content_type: str = field()
    status_code: int = field()
    component_representations: Optional[List[shared.ComponentRepresentation]] = field(default=None)
    
