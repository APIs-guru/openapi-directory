from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetRemoteImageProvidersPathParams:
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRemoteImageProvidersSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRemoteImageProvidersRequest:
    path_params: GetRemoteImageProvidersPathParams = field(default=None)
    security: GetRemoteImageProvidersSecurity = field(default=None)
    

@dataclass
class GetRemoteImageProvidersResponse:
    content_type: str = field(default=None)
    image_provider_infos: Optional[List[shared.ImageProviderInfo]] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
