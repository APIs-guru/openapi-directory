from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CdmaNmr:
    r"""CdmaNmr
    CDMA Network measurement
    """
    
    channel: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    pn_offset: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pnOffset') }})
    bsid: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bsid') }})
    pilot_power: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pilotPower') }})
    
