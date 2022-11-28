from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ReleaseTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    DEPLOY = "DEPLOY"
    ROLLBACK = "ROLLBACK"
    SITE_DISABLE = "SITE_DISABLE"


@dataclass_json
@dataclass
class Release:
    r"""Release
     A `Release` is a particular [collection of configurations and files](sites.versions) that is set to be public at a particular time.
    """
    
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    release_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseTime') }})
    release_user: Optional[ActingUser] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseUser') }})
    type: Optional[ReleaseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    version: Optional[Version] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
