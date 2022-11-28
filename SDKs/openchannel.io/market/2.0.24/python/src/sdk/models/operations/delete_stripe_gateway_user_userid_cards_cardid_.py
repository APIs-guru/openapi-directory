from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteStripeGatewayUserUserIDCardsCardIDPathParams:
    card_id: str = field(metadata={'path_param': { 'field_name': 'cardId', 'style': 'simple', 'explode': False }})
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteStripeGatewayUserUserIDCardsCardIDRequest:
    path_params: DeleteStripeGatewayUserUserIDCardsCardIDPathParams = field()
    

@dataclass
class DeleteStripeGatewayUserUserIDCardsCardIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
