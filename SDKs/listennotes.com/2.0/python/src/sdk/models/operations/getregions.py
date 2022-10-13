from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRegionsHeaders:
    x_listen_api_key: str = field(default=None, metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRegionsRequest:
    headers: GetRegionsHeaders = field(default=None)
    

@dataclass
class GetRegionsResponse:
    content_type: str = field(default=None)
    get_regions_response: Optional[shared.GetRegionsResponse] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
