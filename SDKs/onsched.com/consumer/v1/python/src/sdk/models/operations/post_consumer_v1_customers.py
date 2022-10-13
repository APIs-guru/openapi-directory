from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostConsumerV1CustomersRequests:
    customer_input_model: Optional[shared.CustomerInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    customer_input_model1: Optional[shared.CustomerInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    customer_input_model2: Optional[shared.CustomerInputModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    customer_input_model3: Optional[shared.CustomerInputModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostConsumerV1CustomersRequest:
    request: Optional[PostConsumerV1CustomersRequests] = field(default=None)
    

@dataclass
class PostConsumerV1CustomersResponse:
    content_type: str = field(default=None)
    customer_view_model: Optional[shared.CustomerViewModel] = field(default=None)
    status_code: int = field(default=None)
    
