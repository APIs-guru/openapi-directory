from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PostPortfolioXyzHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPortfolioXyzRequests:
    portfolio_request: Optional[shared.PortfolioRequest] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    portfolio_request1: Optional[shared.PortfolioRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    portfolio_request2: Optional[shared.PortfolioRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostPortfolioXyzRequest:
    headers: PostPortfolioXyzHeaders = field()
    request: Optional[PostPortfolioXyzRequests] = field(default=None)
    

@dataclass
class PostPortfolioXyzResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    portfolio_xyz_models: Optional[List[shared.PortfolioXyzModel]] = field(default=None)
    
