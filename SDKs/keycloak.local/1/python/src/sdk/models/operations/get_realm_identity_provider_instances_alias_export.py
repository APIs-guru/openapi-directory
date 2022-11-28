from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetRealmIdentityProviderInstancesAliasExportPathParams:
    alias: str = field(metadata={'path_param': { 'field_name': 'alias', 'style': 'simple', 'explode': False }})
    realm: str = field(metadata={'path_param': { 'field_name': 'realm', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRealmIdentityProviderInstancesAliasExportQueryParams:
    format: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRealmIdentityProviderInstancesAliasExportRequest:
    path_params: GetRealmIdentityProviderInstancesAliasExportPathParams = field()
    query_params: GetRealmIdentityProviderInstancesAliasExportQueryParams = field()
    

@dataclass
class GetRealmIdentityProviderInstancesAliasExportResponse:
    content_type: str = field()
    status_code: int = field()
    
