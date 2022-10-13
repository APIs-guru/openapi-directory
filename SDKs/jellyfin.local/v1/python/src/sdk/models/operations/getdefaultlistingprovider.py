from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetDefaultListingProviderSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDefaultListingProviderRequest:
    security: GetDefaultListingProviderSecurity = field(default=None)
    

@dataclass
class GetDefaultListingProviderResponse:
    content_type: str = field(default=None)
    listings_provider_info: Optional[shared.ListingsProviderInfo] = field(default=None)
    status_code: int = field(default=None)
    
