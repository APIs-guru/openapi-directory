from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteStripeGatewayDeveloperDeveloperIDAccountsStripeIDPathParams:
    developer_id: str = field(metadata={'path_param': { 'field_name': 'developerId', 'style': 'simple', 'explode': False }})
    stripe_id: str = field(metadata={'path_param': { 'field_name': 'stripeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteStripeGatewayDeveloperDeveloperIDAccountsStripeIDRequest:
    path_params: DeleteStripeGatewayDeveloperDeveloperIDAccountsStripeIDPathParams = field()
    

@dataclass
class DeleteStripeGatewayDeveloperDeveloperIDAccountsStripeIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
