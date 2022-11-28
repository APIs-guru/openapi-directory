from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostStripeGatewayDeveloperDeveloperIDAccountsPathParams:
    developer_id: str = field(metadata={'path_param': { 'field_name': 'developerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostStripeGatewayDeveloperDeveloperIDAccountsQueryParams:
    redirect_url: str = field(metadata={'query_param': { 'field_name': 'redirectUrl', 'style': 'form', 'explode': True }})
    

@dataclass
class PostStripeGatewayDeveloperDeveloperIDAccountsRequest:
    path_params: PostStripeGatewayDeveloperDeveloperIDAccountsPathParams = field()
    query_params: PostStripeGatewayDeveloperDeveloperIDAccountsQueryParams = field()
    

@dataclass
class PostStripeGatewayDeveloperDeveloperIDAccountsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
