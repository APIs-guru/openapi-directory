from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRacksReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRacksReadRequest:
    path_params: DcimRacksReadPathParams = field(default=None)
    

@dataclass
class DcimRacksReadResponse:
    content_type: str = field(default=None)
    rack: Optional[shared.Rack] = field(default=None)
    status_code: int = field(default=None)
    
