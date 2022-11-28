from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CreateVideoRequestSourceEnum(str, Enum):
    SOURCE_UNSPECIFIED = "SOURCE_UNSPECIFIED"
    YOUTUBE = "YOUTUBE"
    DRIVE = "DRIVE"


@dataclass_json
@dataclass
class CreateVideoRequest:
    r"""CreateVideoRequest
    Creates a video. NOTE: Creating a video from Google Drive requires that the requesting app have at least one of the drive, drive.readonly, or drive.file OAuth scopes.
    """
    
    element_properties: Optional[PageElementProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elementProperties') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    source: Optional[CreateVideoRequestSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
