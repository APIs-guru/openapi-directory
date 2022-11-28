from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TestnetGetTokenMetadataPathParams:
    tokenid: str = field(metadata={'path_param': { 'field_name': 'tokenid', 'style': 'simple', 'explode': False }})
    

@dataclass
class TestnetGetTokenMetadataQueryParams:
    verbosity: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'verbosity', 'style': 'form', 'explode': True }})
    

@dataclass
class TestnetGetTokenMetadataRequest:
    path_params: TestnetGetTokenMetadataPathParams = field()
    query_params: TestnetGetTokenMetadataQueryParams = field()
    

@dataclass
class TestnetGetTokenMetadataResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    get_token_metadata_response: Optional[shared.GetTokenMetadataResponse] = field(default=None)
    
