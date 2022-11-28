from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DcimRacksElevationPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class DcimRacksElevationFaceEnum(str, Enum):
    FRONT = "front"
    REAR = "rear"

class DcimRacksElevationRenderEnum(str, Enum):
    JSON = "json"
    SVG = "svg"


@dataclass
class DcimRacksElevationQueryParams:
    exclude: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'exclude', 'style': 'form', 'explode': True }})
    expand_devices: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'expand_devices', 'style': 'form', 'explode': True }})
    face: Optional[DcimRacksElevationFaceEnum] = field(default=None, metadata={'query_param': { 'field_name': 'face', 'style': 'form', 'explode': True }})
    include_images: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_images', 'style': 'form', 'explode': True }})
    legend_width: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'legend_width', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    render: Optional[DcimRacksElevationRenderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'render', 'style': 'form', 'explode': True }})
    unit_height: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'unit_height', 'style': 'form', 'explode': True }})
    unit_width: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'unit_width', 'style': 'form', 'explode': True }})
    

@dataclass
class DcimRacksElevationRequest:
    path_params: DcimRacksElevationPathParams = field()
    query_params: DcimRacksElevationQueryParams = field()
    

@dataclass
class DcimRacksElevationResponse:
    content_type: str = field()
    status_code: int = field()
    rack_units: Optional[List[shared.RackUnit]] = field(default=None)
    
