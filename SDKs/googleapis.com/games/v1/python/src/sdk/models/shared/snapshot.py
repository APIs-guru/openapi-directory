from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SnapshotTypeEnum(str, Enum):
    SNAPSHOT_TYPE_UNSPECIFIED = "SNAPSHOT_TYPE_UNSPECIFIED"
    SAVE_GAME = "SAVE_GAME"


@dataclass_json
@dataclass
class Snapshot:
    r"""Snapshot
    An snapshot object.
    """
    
    cover_image: Optional[SnapshotImage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coverImage') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    drive_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driveId') }})
    duration_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationMillis') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    last_modified_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedMillis') }})
    progress_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('progressValue') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[SnapshotTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    unique_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uniqueName') }})
    
