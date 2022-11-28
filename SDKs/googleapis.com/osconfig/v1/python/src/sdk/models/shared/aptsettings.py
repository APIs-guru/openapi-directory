from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AptSettingsTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    DIST = "DIST"
    UPGRADE = "UPGRADE"


@dataclass_json
@dataclass
class AptSettings:
    r"""AptSettings
    Apt patching is completed by executing `apt-get update && apt-get upgrade`. Additional options can be set to control how this is executed.
    """
    
    excludes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludes') }})
    exclusive_packages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclusivePackages') }})
    type: Optional[AptSettingsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
