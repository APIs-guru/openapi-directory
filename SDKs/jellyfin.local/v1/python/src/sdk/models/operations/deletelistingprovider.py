from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteListingProviderQueryParams:
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteListingProviderSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteListingProviderRequest:
    query_params: DeleteListingProviderQueryParams = field()
    security: DeleteListingProviderSecurity = field()
    

@dataclass
class DeleteListingProviderResponse:
    content_type: str = field()
    status_code: int = field()
    
