from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmComponentsPathParams:
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmComponentsQueryParams:
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    parent: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'parent', 'style': 'form', 'explode': True }})
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRealmComponentsRequest:
    path_params: GetRealmComponentsPathParams = field(default=None)
    query_params: GetRealmComponentsQueryParams = field(default=None)
    

@dataclass
class GetRealmComponentsResponse:
    component_representations: Optional[List[shared.ComponentRepresentation]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
