from dataclasses import dataclass, field



@dataclass
class DeleteStripeGatewayDeveloperDeveloperIDAccountsStripeIDPathParams:
    developer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'developerId', 'style': 'simple', 'explode': False }})
    stripe_id: str = field(default=None, metadata={'path_param': { 'field_name': 'stripeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteStripeGatewayDeveloperDeveloperIDAccountsStripeIDRequest:
    path_params: DeleteStripeGatewayDeveloperDeveloperIDAccountsStripeIDPathParams = field(default=None)
    

@dataclass
class DeleteStripeGatewayDeveloperDeveloperIDAccountsStripeIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
