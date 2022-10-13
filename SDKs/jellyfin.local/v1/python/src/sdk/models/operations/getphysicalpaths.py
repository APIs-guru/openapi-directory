from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetPhysicalPathsSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetPhysicalPathsRequest:
    security: GetPhysicalPathsSecurity = field(default=None)
    

@dataclass
class GetPhysicalPathsResponse:
    content_type: str = field(default=None)
    get_physical_paths_200_application_json_strings: Optional[List[str]] = field(default=None)
    status_code: int = field(default=None)
    
