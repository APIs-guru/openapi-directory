from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTokenMetadataPathParams:
    tokenid: str = field(default=None, metadata={'path_param': { 'field_name': 'tokenid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTokenMetadataQueryParams:
    verbosity: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'verbosity', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTokenMetadataRequest:
    path_params: GetTokenMetadataPathParams = field(default=None)
    query_params: GetTokenMetadataQueryParams = field(default=None)
    

@dataclass
class GetTokenMetadataResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    get_token_metadata_response: Optional[shared.GetTokenMetadataResponse] = field(default=None)
    
