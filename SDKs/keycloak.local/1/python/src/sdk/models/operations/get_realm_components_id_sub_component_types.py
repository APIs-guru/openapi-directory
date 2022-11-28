from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmComponentsIDSubComponentTypesPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmComponentsIDSubComponentTypesQueryParams:
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRealmComponentsIDSubComponentTypesRequest:
    path_params: GetRealmComponentsIDSubComponentTypesPathParams = field()
    query_params: GetRealmComponentsIDSubComponentTypesQueryParams = field()
    

@dataclass
class GetRealmComponentsIDSubComponentTypesResponse:
    content_type: str = field()
    status_code: int = field()
    component_type_representations: Optional[List[shared.ComponentTypeRepresentation]] = field(default=None)
    
