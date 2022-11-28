from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostStripeGatewayUserUserIDCardsPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostStripeGatewayUserUserIDCardsQueryParams:
    token: str = field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    is_default: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isDefault', 'style': 'form', 'explode': True }})
    

@dataclass
class PostStripeGatewayUserUserIDCardsRequest:
    path_params: PostStripeGatewayUserUserIDCardsPathParams = field()
    query_params: PostStripeGatewayUserUserIDCardsQueryParams = field()
    

@dataclass
class PostStripeGatewayUserUserIDCardsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
