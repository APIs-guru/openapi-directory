from dataclasses import dataclass, field



@dataclass
class GetStripeGatewayDeveloperDeveloperIDAccountsPathParams:
    developer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'developerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStripeGatewayDeveloperDeveloperIDAccountsRequest:
    path_params: GetStripeGatewayDeveloperDeveloperIDAccountsPathParams = field(default=None)
    

@dataclass
class GetStripeGatewayDeveloperDeveloperIDAccountsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
