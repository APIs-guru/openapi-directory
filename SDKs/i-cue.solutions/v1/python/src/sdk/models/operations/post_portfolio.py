from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PostPortfolioHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token' }})
    

@dataclass
class PostPortfolioRequests:
    portfolio_request: Optional[shared.PortfolioRequest] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    portfolio_request1: Optional[shared.PortfolioRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    portfolio_request2: Optional[shared.PortfolioRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostPortfolioRequest:
    headers: PostPortfolioHeaders = field(default=None)
    request: Optional[PostPortfolioRequests] = field(default=None)
    

@dataclass
class PostPortfolioResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    portfolio_models: Optional[List[shared.PortfolioModel]] = field(default=None)
    status_code: int = field(default=None)
    
