from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class BackupStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    DELETING = "DELETING"
    ACTIVE = "ACTIVE"
    FAILED = "FAILED"
    RESTORING = "RESTORING"


@dataclass_json
@dataclass
class BackupInput:
    r"""BackupInput
    The details of a backup resource.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    service_revision: Optional[ServiceInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceRevision') }})
    

@dataclass_json
@dataclass
class Backup:
    r"""Backup
    The details of a backup resource.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    restoring_services: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restoringServices') }})
    service_revision: Optional[Service] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceRevision') }})
    state: Optional[BackupStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
