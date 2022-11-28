from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class BusinessCallsSettingsCallsStateEnum(str, Enum):
    CALLS_STATE_UNSPECIFIED = "CALLS_STATE_UNSPECIFIED"
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"


@dataclass_json
@dataclass
class BusinessCallsSettings:
    r"""BusinessCallsSettings
    Business calls settings for a location.
    """
    
    calls_state: Optional[BusinessCallsSettingsCallsStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callsState') }})
    consent_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
