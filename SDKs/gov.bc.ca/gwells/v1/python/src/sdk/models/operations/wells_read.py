from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class WellsReadPathParams:
    well_tag_number: int = field(default=None, metadata={'path_param': { 'field_name': 'well_tag_number', 'style': 'simple', 'explode': False }})
    

@dataclass
class WellsReadRequest:
    path_params: WellsReadPathParams = field(default=None)
    

@dataclass
class WellsReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    well_detail: Optional[shared.WellDetail] = field(default=None)
    
