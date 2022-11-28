from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DeleteSubtitlePathParams:
    index: int = field(metadata={'path_param': { 'field_name': 'index', 'style': 'simple', 'explode': False }})
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSubtitleSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteSubtitleRequest:
    path_params: DeleteSubtitlePathParams = field()
    security: DeleteSubtitleSecurity = field()
    

@dataclass
class DeleteSubtitleResponse:
    content_type: str = field()
    status_code: int = field()
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
