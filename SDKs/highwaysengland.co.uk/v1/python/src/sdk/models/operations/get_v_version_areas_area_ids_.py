from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVVersionAreasAreaIdsPathParams:
    area_ids: str = field(metadata={'path_param': { 'field_name': 'area_Ids', 'style': 'simple', 'explode': False }})
    version: str = field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVVersionAreasAreaIdsRequest:
    path_params: GetVVersionAreasAreaIdsPathParams = field()
    

@dataclass
class GetVVersionAreasAreaIdsResponse:
    content_type: str = field()
    status_code: int = field()
    area_response: Optional[shared.AreaResponse] = field(default=None)
    
