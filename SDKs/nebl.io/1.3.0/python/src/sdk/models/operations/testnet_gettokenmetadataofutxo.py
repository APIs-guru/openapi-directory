from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TestnetGetTokenMetadataOfUtxoPathParams:
    tokenid: str = field(metadata={'path_param': { 'field_name': 'tokenid', 'style': 'simple', 'explode': False }})
    utxo: str = field(metadata={'path_param': { 'field_name': 'utxo', 'style': 'simple', 'explode': False }})
    

@dataclass
class TestnetGetTokenMetadataOfUtxoQueryParams:
    verbosity: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'verbosity', 'style': 'form', 'explode': True }})
    

@dataclass
class TestnetGetTokenMetadataOfUtxoRequest:
    path_params: TestnetGetTokenMetadataOfUtxoPathParams = field()
    query_params: TestnetGetTokenMetadataOfUtxoQueryParams = field()
    

@dataclass
class TestnetGetTokenMetadataOfUtxoResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    get_token_metadata_response: Optional[shared.GetTokenMetadataResponse] = field(default=None)
    
