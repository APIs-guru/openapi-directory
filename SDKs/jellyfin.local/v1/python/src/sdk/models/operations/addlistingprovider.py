from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AddListingProviderQueryParams:
    pw: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pw', 'style': 'form', 'explode': True }})
    validate_listings: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'validateListings', 'style': 'form', 'explode': True }})
    validate_login: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'validateLogin', 'style': 'form', 'explode': True }})
    

@dataclass
class AddListingProviderRequests:
    listings_provider_info: Optional[shared.ListingsProviderInfo] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    listings_provider_info1: Optional[shared.ListingsProviderInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    listings_provider_info2: Optional[shared.ListingsProviderInfo] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class AddListingProviderSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AddListingProviderRequest:
    query_params: AddListingProviderQueryParams = field(default=None)
    request: Optional[AddListingProviderRequests] = field(default=None)
    security: AddListingProviderSecurity = field(default=None)
    

@dataclass
class AddListingProviderResponse:
    content_type: str = field(default=None)
    listings_provider_info: Optional[shared.ListingsProviderInfo] = field(default=None)
    status_code: int = field(default=None)
    
