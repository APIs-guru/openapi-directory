from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudSecuritycenterV1ExternalSystem:
    assignees: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignees' }})
    external_system_update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalSystemUpdateTime' }})
    external_uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalUid' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
