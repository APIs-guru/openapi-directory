from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Audio:
    r"""Audio
    Audio preprocessing configuration.
    """
    
    high_boost: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highBoost') }})
    low_boost: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lowBoost') }})
    lufs: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lufs') }})
    
