from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class WindowsUpdateSettingsClassificationsEnum(str, Enum):
    CLASSIFICATION_UNSPECIFIED = "CLASSIFICATION_UNSPECIFIED"
    CRITICAL = "CRITICAL"
    SECURITY = "SECURITY"
    DEFINITION = "DEFINITION"
    DRIVER = "DRIVER"
    FEATURE_PACK = "FEATURE_PACK"
    SERVICE_PACK = "SERVICE_PACK"
    TOOL = "TOOL"
    UPDATE_ROLLUP = "UPDATE_ROLLUP"
    UPDATE = "UPDATE"


@dataclass_json
@dataclass
class WindowsUpdateSettings:
    r"""WindowsUpdateSettings
    Windows patching is performed using the Windows Update Agent.
    """
    
    classifications: Optional[List[WindowsUpdateSettingsClassificationsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classifications') }})
    excludes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludes') }})
    exclusive_patches: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclusivePatches') }})
    
