from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AreasGetPathParams:
    version: str = field(default=None, metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class AreasGetRequest:
    path_params: AreasGetPathParams = field(default=None)
    

@dataclass
class AreasGetResponse:
    area_response: Optional[shared.AreaResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
