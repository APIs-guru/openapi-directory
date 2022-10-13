from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostHyperparameterHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token' }})
    

@dataclass
class PostHyperparameterRequests:
    hyperparameter_model: Optional[shared.HyperparameterModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    hyperparameter_model1: Optional[shared.HyperparameterModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    hyperparameter_model2: Optional[shared.HyperparameterModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostHyperparameterRequest:
    headers: PostHyperparameterHeaders = field(default=None)
    request: Optional[PostHyperparameterRequests] = field(default=None)
    

@dataclass
class PostHyperparameterResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
