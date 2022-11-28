from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTokenMetadataOfUtxoPathParams:
    tokenid: str = field(metadata={'path_param': { 'field_name': 'tokenid', 'style': 'simple', 'explode': False }})
    utxo: str = field(metadata={'path_param': { 'field_name': 'utxo', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTokenMetadataOfUtxoQueryParams:
    verbosity: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'verbosity', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTokenMetadataOfUtxoRequest:
    path_params: GetTokenMetadataOfUtxoPathParams = field()
    query_params: GetTokenMetadataOfUtxoQueryParams = field()
    

@dataclass
class GetTokenMetadataOfUtxoResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    get_token_metadata_response: Optional[shared.GetTokenMetadataResponse] = field(default=None)
    
