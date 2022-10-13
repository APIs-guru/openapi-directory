from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAddressUtxosPathParams:
    address: str = field(default=None, metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAddressUtxosRequest:
    path_params: GetAddressUtxosPathParams = field(default=None)
    

@dataclass
class GetAddressUtxosResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_address_utxos_response: Optional[List[shared.GetAddressUtxosResponse]] = field(default=None)
    
