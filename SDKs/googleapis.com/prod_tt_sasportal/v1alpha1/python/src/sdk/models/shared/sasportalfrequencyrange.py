from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SasPortalFrequencyRange:
    r"""SasPortalFrequencyRange
    Frequency range from `low_frequency` to `high_frequency`.
    """
    
    high_frequency_mhz: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highFrequencyMhz') }})
    low_frequency_mhz: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lowFrequencyMhz') }})
    
