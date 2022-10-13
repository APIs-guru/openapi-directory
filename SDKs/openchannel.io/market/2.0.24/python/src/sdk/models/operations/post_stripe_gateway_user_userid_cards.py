from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostStripeGatewayUserUserIDCardsPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostStripeGatewayUserUserIDCardsQueryParams:
    is_default: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isDefault', 'style': 'form', 'explode': True }})
    token: str = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class PostStripeGatewayUserUserIDCardsRequest:
    path_params: PostStripeGatewayUserUserIDCardsPathParams = field(default=None)
    query_params: PostStripeGatewayUserUserIDCardsQueryParams = field(default=None)
    

@dataclass
class PostStripeGatewayUserUserIDCardsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
