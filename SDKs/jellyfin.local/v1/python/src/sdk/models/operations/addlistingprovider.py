from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
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
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AddListingProviderRequest:
    query_params: AddListingProviderQueryParams = field()
    security: AddListingProviderSecurity = field()
    request: Optional[AddListingProviderRequests] = field(default=None)
    

@dataclass
class AddListingProviderResponse:
    content_type: str = field()
    status_code: int = field()
    listings_provider_info: Optional[shared.ListingsProviderInfo] = field(default=None)
    
