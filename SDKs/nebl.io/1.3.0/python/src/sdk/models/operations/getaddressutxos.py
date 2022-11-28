from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAddressUtxosPathParams:
    address: str = field(metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAddressUtxosRequest:
    path_params: GetAddressUtxosPathParams = field()
    

@dataclass
class GetAddressUtxosResponse:
    content_type: str = field()
    status_code: int = field()
    get_address_utxos_response: Optional[List[shared.GetAddressUtxosResponse]] = field(default=None)
    
