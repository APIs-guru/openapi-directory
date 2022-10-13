from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteSubtitlePathParams:
    index: int = field(default=None, metadata={'path_param': { 'field_name': 'index', 'style': 'simple', 'explode': False }})
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSubtitleSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteSubtitleRequest:
    path_params: DeleteSubtitlePathParams = field(default=None)
    security: DeleteSubtitleSecurity = field(default=None)
    

@dataclass
class DeleteSubtitleResponse:
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
