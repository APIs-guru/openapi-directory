from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DcimRacksReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DcimRacksReadRequest:
    path_params: DcimRacksReadPathParams = field()
    

@dataclass
class DcimRacksReadResponse:
    content_type: str = field()
    status_code: int = field()
    rack: Optional[shared.Rack] = field(default=None)
    
