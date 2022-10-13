from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PostPortfolioXyzHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token' }})
    

@dataclass
class PostPortfolioXyzRequests:
    portfolio_request: Optional[shared.PortfolioRequest] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    portfolio_request1: Optional[shared.PortfolioRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    portfolio_request2: Optional[shared.PortfolioRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostPortfolioXyzRequest:
    headers: PostPortfolioXyzHeaders = field(default=None)
    request: Optional[PostPortfolioXyzRequests] = field(default=None)
    

@dataclass
class PostPortfolioXyzResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    portfolio_xyz_models: Optional[List[shared.PortfolioXyzModel]] = field(default=None)
    status_code: int = field(default=None)
    
