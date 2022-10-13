from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class DeleteListingProviderQueryParams:
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteListingProviderSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteListingProviderRequest:
    query_params: DeleteListingProviderQueryParams = field(default=None)
    security: DeleteListingProviderSecurity = field(default=None)
    

@dataclass
class DeleteListingProviderResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
