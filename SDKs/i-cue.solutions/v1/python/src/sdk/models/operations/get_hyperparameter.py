from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetHyperparameterHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token' }})
    

@dataclass
class GetHyperparameterRequest:
    headers: GetHyperparameterHeaders = field(default=None)
    

@dataclass
class GetHyperparameterResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    hyperparameter_model: Optional[shared.HyperparameterModel] = field(default=None)
    status_code: int = field(default=None)
    
