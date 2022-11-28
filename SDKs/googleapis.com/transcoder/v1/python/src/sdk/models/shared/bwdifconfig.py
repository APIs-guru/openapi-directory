from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BwdifConfig:
    r"""BwdifConfig
    Bob Weaver Deinterlacing Filter Configuration.
    """
    
    deinterlace_all_frames: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deinterlaceAllFrames') }})
    mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    parity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parity') }})
    
