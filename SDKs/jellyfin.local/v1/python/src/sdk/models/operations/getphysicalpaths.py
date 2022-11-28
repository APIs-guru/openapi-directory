from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetPhysicalPathsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetPhysicalPathsRequest:
    security: GetPhysicalPathsSecurity = field()
    

@dataclass
class GetPhysicalPathsResponse:
    content_type: str = field()
    status_code: int = field()
    get_physical_paths_200_application_json_strings: Optional[List[str]] = field(default=None)
    
