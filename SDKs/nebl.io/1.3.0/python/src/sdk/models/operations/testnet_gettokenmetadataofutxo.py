from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TestnetGetTokenMetadataOfUtxoPathParams:
    tokenid: str = field(default=None, metadata={'path_param': { 'field_name': 'tokenid', 'style': 'simple', 'explode': False }})
    utxo: str = field(default=None, metadata={'path_param': { 'field_name': 'utxo', 'style': 'simple', 'explode': False }})
    

@dataclass
class TestnetGetTokenMetadataOfUtxoQueryParams:
    verbosity: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'verbosity', 'style': 'form', 'explode': True }})
    

@dataclass
class TestnetGetTokenMetadataOfUtxoRequest:
    path_params: TestnetGetTokenMetadataOfUtxoPathParams = field(default=None)
    query_params: TestnetGetTokenMetadataOfUtxoQueryParams = field(default=None)
    

@dataclass
class TestnetGetTokenMetadataOfUtxoResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    get_token_metadata_response: Optional[shared.GetTokenMetadataResponse] = field(default=None)
    
