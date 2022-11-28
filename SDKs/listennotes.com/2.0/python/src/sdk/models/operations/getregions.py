from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetRegionsHeaders:
    x_listen_api_key: str = field(metadata={'header': { 'field_name': 'X-ListenAPI-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRegionsRequest:
    headers: GetRegionsHeaders = field()
    

@dataclass
class GetRegionsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    get_regions_response: Optional[shared.GetRegionsResponse] = field(default=None)
    
