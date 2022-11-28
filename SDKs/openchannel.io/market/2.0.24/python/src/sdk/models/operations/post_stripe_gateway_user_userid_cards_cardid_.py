from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostStripeGatewayUserUserIDCardsCardIDPathParams:
    card_id: str = field(metadata={'path_param': { 'field_name': 'cardId', 'style': 'simple', 'explode': False }})
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostStripeGatewayUserUserIDCardsCardIDQueryParams:
    address_city: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'address_city', 'style': 'form', 'explode': True }})
    address_country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'address_country', 'style': 'form', 'explode': True }})
    address_line1: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'address_line1', 'style': 'form', 'explode': True }})
    address_line2: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'address_line2', 'style': 'form', 'explode': True }})
    address_state: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'address_state', 'style': 'form', 'explode': True }})
    address_zip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'address_zip', 'style': 'form', 'explode': True }})
    is_default: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isDefault', 'style': 'form', 'explode': True }})
    

@dataclass
class PostStripeGatewayUserUserIDCardsCardIDRequest:
    path_params: PostStripeGatewayUserUserIDCardsCardIDPathParams = field()
    query_params: PostStripeGatewayUserUserIDCardsCardIDQueryParams = field()
    

@dataclass
class PostStripeGatewayUserUserIDCardsCardIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
