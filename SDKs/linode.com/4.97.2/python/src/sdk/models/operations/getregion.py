from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetRegionPathParams:
    region_id: str = field(default=None, metadata={'path_param': { 'field_name': 'regionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRegionRequest:
    path_params: GetRegionPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetRegionDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetRegionResponse:
    content_type: str = field(default=None)
    region: Optional[shared.Region] = field(default=None)
    status_code: int = field(default=None)
    get_region_default_application_json_object: Optional[GetRegionDefaultApplicationJSON] = field(default=None)
    
