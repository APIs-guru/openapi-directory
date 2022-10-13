from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import service

class BackupStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    DELETING = "DELETING"
    ACTIVE = "ACTIVE"
    FAILED = "FAILED"
    RESTORING = "RESTORING"


@dataclass_json
@dataclass
class Backup:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    restoring_services: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restoringServices' }})
    service_revision: Optional[service.Service] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceRevision' }})
    state: Optional[BackupStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
