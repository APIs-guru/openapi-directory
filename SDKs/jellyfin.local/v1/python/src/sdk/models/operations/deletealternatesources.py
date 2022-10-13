from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteAlternateSourcesPathParams:
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAlternateSourcesSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteAlternateSourcesRequest:
    path_params: DeleteAlternateSourcesPathParams = field(default=None)
    security: DeleteAlternateSourcesSecurity = field(default=None)
    

@dataclass
class DeleteAlternateSourcesResponse:
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
