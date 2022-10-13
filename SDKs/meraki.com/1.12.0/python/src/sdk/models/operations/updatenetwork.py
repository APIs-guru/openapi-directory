from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateNetworkPathParams:
    network_id: str = field(default=None, metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateNetworkRequestBody:
    enrollment_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enrollmentString' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZone' }})
    

@dataclass
class UpdateNetworkRequest:
    path_params: UpdateNetworkPathParams = field(default=None)
    request: Optional[UpdateNetworkRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateNetworkResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_network_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
