from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetKvPairsByIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetKvPairsByIDRequest:
    path_params: GetKvPairsByIDPathParams = field()
    

@dataclass
class GetKvPairsByIDResponse:
    content_type: str = field()
    status_code: int = field()
    key_value_pair: Optional[shared.KeyValuePair] = field(default=None)
    
