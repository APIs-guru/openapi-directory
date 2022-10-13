from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetKvPairsByIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetKvPairsByIDRequest:
    path_params: GetKvPairsByIDPathParams = field(default=None)
    

@dataclass
class GetKvPairsByIDResponse:
    content_type: str = field(default=None)
    key_value_pair: Optional[shared.KeyValuePair] = field(default=None)
    status_code: int = field(default=None)
    
