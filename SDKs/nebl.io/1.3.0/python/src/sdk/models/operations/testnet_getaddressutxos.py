from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class TestnetGetAddressUtxosPathParams:
    address: str = field(metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclass
class TestnetGetAddressUtxosRequest:
    path_params: TestnetGetAddressUtxosPathParams = field()
    

@dataclass
class TestnetGetAddressUtxosResponse:
    content_type: str = field()
    status_code: int = field()
    get_address_utxos_response: Optional[List[shared.GetAddressUtxosResponse]] = field(default=None)
    
