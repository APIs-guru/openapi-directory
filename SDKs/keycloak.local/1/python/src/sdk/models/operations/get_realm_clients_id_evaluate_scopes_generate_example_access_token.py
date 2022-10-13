from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRealmClientsIDEvaluateScopesGenerateExampleAccessTokenPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    realm: str = field(default=None, metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmClientsIDEvaluateScopesGenerateExampleAccessTokenQueryParams:
    scope: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'scope', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRealmClientsIDEvaluateScopesGenerateExampleAccessTokenRequest:
    path_params: GetRealmClientsIDEvaluateScopesGenerateExampleAccessTokenPathParams = field(default=None)
    query_params: GetRealmClientsIDEvaluateScopesGenerateExampleAccessTokenQueryParams = field(default=None)
    

@dataclass
class GetRealmClientsIDEvaluateScopesGenerateExampleAccessTokenResponse:
    access_token: Optional[shared.AccessToken] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
