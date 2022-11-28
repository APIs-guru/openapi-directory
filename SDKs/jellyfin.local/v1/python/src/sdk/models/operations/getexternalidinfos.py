from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetExternalIDInfosPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetExternalIDInfosSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetExternalIDInfosRequest:
    path_params: GetExternalIDInfosPathParams = field()
    security: GetExternalIDInfosSecurity = field()
    

@dataclass
class GetExternalIDInfosResponse:
    content_type: str = field()
    status_code: int = field()
    external_id_infos: Optional[List[shared.ExternalIDInfo]] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
