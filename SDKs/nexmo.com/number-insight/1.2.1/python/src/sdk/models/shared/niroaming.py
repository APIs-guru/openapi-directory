from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class NiRoamingStatusEnum(str, Enum):
    ROAMING = "roaming"
    NOT_ROAMING = "not_roaming"


@dataclass_json
@dataclass
class NiRoaming:
    r"""NiRoaming
    Information about the roaming status for `number`. This is applicable to mobile numbers only. If unknown, this may return a string of `unknown` instead of an object.
    """
    
    roaming_country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roaming_country_code') }})
    roaming_network_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roaming_network_code') }})
    roaming_network_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roaming_network_name') }})
    status: Optional[NiRoamingStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
