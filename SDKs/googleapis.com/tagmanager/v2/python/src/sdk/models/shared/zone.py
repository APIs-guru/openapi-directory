from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import zoneboundary
from . import zonechildcontainer
from . import zonetyperestriction


@dataclass_json
@dataclass
class Zone:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    boundary: Optional[zoneboundary.ZoneBoundary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boundary' }})
    child_container: Optional[List[zonechildcontainer.ZoneChildContainer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childContainer' }})
    container_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerId' }})
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprint' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    tag_manager_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagManagerUrl' }})
    type_restriction: Optional[zonetyperestriction.ZoneTypeRestriction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'typeRestriction' }})
    workspace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workspaceId' }})
    zone_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zoneId' }})
    
