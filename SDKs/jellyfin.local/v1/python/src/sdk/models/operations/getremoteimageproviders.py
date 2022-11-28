from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetRemoteImageProvidersPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRemoteImageProvidersSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRemoteImageProvidersRequest:
    path_params: GetRemoteImageProvidersPathParams = field()
    security: GetRemoteImageProvidersSecurity = field()
    

@dataclass
class GetRemoteImageProvidersResponse:
    content_type: str = field()
    status_code: int = field()
    image_provider_infos: Optional[List[shared.ImageProviderInfo]] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
