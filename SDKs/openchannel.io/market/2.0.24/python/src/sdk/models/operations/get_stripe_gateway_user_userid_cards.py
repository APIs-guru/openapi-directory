from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetStripeGatewayUserUserIDCardsPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStripeGatewayUserUserIDCardsRequest:
    path_params: GetStripeGatewayUserUserIDCardsPathParams = field()
    

@dataclass
class GetStripeGatewayUserUserIDCardsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
