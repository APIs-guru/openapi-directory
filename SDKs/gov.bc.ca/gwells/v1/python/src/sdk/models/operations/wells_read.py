from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class WellsReadPathParams:
    well_tag_number: int = field(metadata={'path_param': { 'field_name': 'well_tag_number', 'style': 'simple', 'explode': False }})
    

@dataclass
class WellsReadRequest:
    path_params: WellsReadPathParams = field()
    

@dataclass
class WellsReadResponse:
    content_type: str = field()
    status_code: int = field()
    well_detail: Optional[shared.WellDetail] = field(default=None)
    
