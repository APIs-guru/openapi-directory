from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDefaultListingProviderSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDefaultListingProviderRequest:
    security: GetDefaultListingProviderSecurity = field()
    

@dataclass
class GetDefaultListingProviderResponse:
    content_type: str = field()
    status_code: int = field()
    listings_provider_info: Optional[shared.ListingsProviderInfo] = field(default=None)
    
