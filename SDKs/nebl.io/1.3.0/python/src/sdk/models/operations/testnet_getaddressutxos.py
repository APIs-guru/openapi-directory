from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class TestnetGetAddressUtxosPathParams:
    address: str = field(default=None, metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclass
class TestnetGetAddressUtxosRequest:
    path_params: TestnetGetAddressUtxosPathParams = field(default=None)
    

@dataclass
class TestnetGetAddressUtxosResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_address_utxos_response: Optional[List[shared.GetAddressUtxosResponse]] = field(default=None)
    
