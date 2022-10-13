from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetAPIV1RssBillsIDRssPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV1RssBillsIDRssRequest:
    path_params: GetAPIV1RssBillsIDRssPathParams = field(default=None)
    

@dataclass
class GetAPIV1RssBillsIDRssResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
