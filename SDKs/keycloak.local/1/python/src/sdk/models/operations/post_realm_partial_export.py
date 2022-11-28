from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostRealmPartialExportPathParams:
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRealmPartialExportQueryParams:
    export_clients: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'exportClients', 'style': 'form', 'explode': True }})
    export_groups_and_roles: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'exportGroupsAndRoles', 'style': 'form', 'explode': True }})
    

@dataclass
class PostRealmPartialExportRequest:
    path_params: PostRealmPartialExportPathParams = field()
    query_params: PostRealmPartialExportQueryParams = field()
    

@dataclass
class PostRealmPartialExportResponse:
    content_type: str = field()
    status_code: int = field()
    realm_representation: Optional[shared.RealmRepresentation] = field(default=None)
    
