from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Cdma:
    r"""Cdma
    CDMA measurement
    """
    
    bsid: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bsid') }})
    nid: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nid') }})
    sid: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sid') }})
    base_lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseLat') }})
    base_lng: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseLng') }})
    local_id: Optional[CdmaLocalID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localId') }})
    nmr: Optional[List[CdmaNmr]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nmr') }})
    pilot_power: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pilotPower') }})
    rz: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rz') }})
    
