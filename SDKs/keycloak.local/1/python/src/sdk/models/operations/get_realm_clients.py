from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRealmClientsPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmClientsQueryParams:
    client_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'clientId', 'style': 'form', 'explode': True }})
    first: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'first', 'style': 'form', 'explode': True }})
    max: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': True }})
    search: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    viewable_only: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'viewableOnly', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRealmClientsRequest:
    path_params: GetRealmClientsPathParams = field()
    query_params: GetRealmClientsQueryParams = field()
    

@dataclass
class GetRealmClientsResponse:
    content_type: str = field()
    status_code: int = field()
    client_representations: Optional[List[shared.ClientRepresentation]] = field(default=None)
    
