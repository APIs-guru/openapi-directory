from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class KeyFormFactorEnum(str, Enum):
    ALL_FORM_FACTORS = "ALL_FORM_FACTORS"
    PHONE = "PHONE"
    DESKTOP = "DESKTOP"
    TABLET = "TABLET"


@dataclass_json
@dataclass
class Key:
    r"""Key
    Key defines all the dimensions that identify this record as unique.
    """
    
    effective_connection_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveConnectionType') }})
    form_factor: Optional[KeyFormFactorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formFactor') }})
    origin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('origin') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
