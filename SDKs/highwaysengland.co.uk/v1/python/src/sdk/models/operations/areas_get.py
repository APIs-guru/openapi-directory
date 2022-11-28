from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AreasGetPathParams:
    version: str = field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class AreasGetRequest:
    path_params: AreasGetPathParams = field()
    

@dataclass
class AreasGetResponse:
    content_type: str = field()
    status_code: int = field()
    area_response: Optional[shared.AreaResponse] = field(default=None)
    
