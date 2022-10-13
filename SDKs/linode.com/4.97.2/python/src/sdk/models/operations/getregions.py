from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class GetRegions200ApplicationJSON:
    data: Optional[List[shared.Region]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pages' }})
    results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

@dataclass_json
@dataclass
class GetRegionsDefaultApplicationJSON:
    errors: Optional[List[shared.ErrorObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    

@dataclass
class GetRegionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_regions_200_application_json_object: Optional[GetRegions200ApplicationJSON] = field(default=None)
    get_regions_default_application_json_object: Optional[GetRegionsDefaultApplicationJSON] = field(default=None)
    
