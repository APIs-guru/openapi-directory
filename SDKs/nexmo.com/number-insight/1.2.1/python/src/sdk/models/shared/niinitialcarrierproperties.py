from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class NiInitialCarrierPropertiesNetworkTypeEnum(str, Enum):
    MOBILE = "mobile"
    LANDLINE = "landline"
    LANDLINE_PREMIUM = "landline_premium"
    LANDLINE_TOLLFREE = "landline_tollfree"
    VIRTUAL = "virtual"
    UNKNOWN = "unknown"
    PAGER = "pager"
    NULL = "null"


@dataclass_json
@dataclass
class NiInitialCarrierProperties:
    r"""NiInitialCarrierProperties
    Information about the network `number` was initially connected to.
    """
    
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_code') }})
    network_type: Optional[NiInitialCarrierPropertiesNetworkTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_type') }})
    
