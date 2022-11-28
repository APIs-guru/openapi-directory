from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetStripeGatewayDeveloperDeveloperIDAccountsPathParams:
    developer_id: str = field(metadata={'path_param': { 'field_name': 'developerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStripeGatewayDeveloperDeveloperIDAccountsRequest:
    path_params: GetStripeGatewayDeveloperDeveloperIDAccountsPathParams = field()
    

@dataclass
class GetStripeGatewayDeveloperDeveloperIDAccountsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
