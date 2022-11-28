from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostSetupV1ServicesRequests:
    service_input_model: Optional[shared.ServiceInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    service_input_model1: Optional[shared.ServiceInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    service_input_model2: Optional[shared.ServiceInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    service_input_model3: Optional[shared.ServiceInputModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostSetupV1ServicesRequest:
    request: Optional[PostSetupV1ServicesRequests] = field(default=None)
    

@dataclass
class PostSetupV1ServicesResponse:
    content_type: str = field()
    status_code: int = field()
    service_view_model: Optional[shared.ServiceViewModel] = field(default=None)
    
