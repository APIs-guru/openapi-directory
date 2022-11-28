from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class PutConsumerV1CustomersIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutConsumerV1CustomersIDRequests:
    customer_update_model: Optional[shared.CustomerUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    customer_update_model1: Optional[shared.CustomerUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    customer_update_model2: Optional[shared.CustomerUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    customer_update_model3: Optional[shared.CustomerUpdateModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutConsumerV1CustomersIDRequest:
    path_params: PutConsumerV1CustomersIDPathParams = field()
    request: Optional[PutConsumerV1CustomersIDRequests] = field(default=None)
    

@dataclass
class PutConsumerV1CustomersIDResponse:
    content_type: str = field()
    status_code: int = field()
    
