from dataclasses import dataclass, field



@dataclass
class GetStripeGatewayUserUserIDCardsPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStripeGatewayUserUserIDCardsRequest:
    path_params: GetStripeGatewayUserUserIDCardsPathParams = field(default=None)
    

@dataclass
class GetStripeGatewayUserUserIDCardsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
