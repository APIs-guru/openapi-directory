from dataclasses import dataclass, field



@dataclass
class DeleteStripeGatewayUserUserIDCardsCardIDPathParams:
    card_id: str = field(default=None, metadata={'path_param': { 'field_name': 'cardId', 'style': 'simple', 'explode': False }})
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteStripeGatewayUserUserIDCardsCardIDRequest:
    path_params: DeleteStripeGatewayUserUserIDCardsCardIDPathParams = field(default=None)
    

@dataclass
class DeleteStripeGatewayUserUserIDCardsCardIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
