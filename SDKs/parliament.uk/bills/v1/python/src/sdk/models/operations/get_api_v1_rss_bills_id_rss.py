from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetAPIV1RssBillsIDRssPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV1RssBillsIDRssRequest:
    path_params: GetAPIV1RssBillsIDRssPathParams = field()
    

@dataclass
class GetAPIV1RssBillsIDRssResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
