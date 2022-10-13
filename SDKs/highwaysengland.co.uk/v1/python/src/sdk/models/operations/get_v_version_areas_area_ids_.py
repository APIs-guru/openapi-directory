from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVVersionAreasAreaIdsPathParams:
    area_ids: str = field(default=None, metadata={'path_param': { 'field_name': 'area_Ids', 'style': 'simple', 'explode': False }})
    version: str = field(default=None, metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVVersionAreasAreaIdsRequest:
    path_params: GetVVersionAreasAreaIdsPathParams = field(default=None)
    

@dataclass
class GetVVersionAreasAreaIdsResponse:
    area_response: Optional[shared.AreaResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
