from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetHyperparameterHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetHyperparameterRequest:
    headers: GetHyperparameterHeaders = field()
    

@dataclass
class GetHyperparameterResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    hyperparameter_model: Optional[shared.HyperparameterModel] = field(default=None)
    
