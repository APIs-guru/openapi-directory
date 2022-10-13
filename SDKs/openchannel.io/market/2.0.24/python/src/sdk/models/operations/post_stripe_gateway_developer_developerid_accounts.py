from dataclasses import dataclass, field



@dataclass
class PostStripeGatewayDeveloperDeveloperIDAccountsPathParams:
    developer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'developerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostStripeGatewayDeveloperDeveloperIDAccountsQueryParams:
    redirect_url: str = field(default=None, metadata={'query_param': { 'field_name': 'redirectUrl', 'style': 'form', 'explode': True }})
    

@dataclass
class PostStripeGatewayDeveloperDeveloperIDAccountsRequest:
    path_params: PostStripeGatewayDeveloperDeveloperIDAccountsPathParams = field(default=None)
    query_params: PostStripeGatewayDeveloperDeveloperIDAccountsQueryParams = field(default=None)
    

@dataclass
class PostStripeGatewayDeveloperDeveloperIDAccountsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
