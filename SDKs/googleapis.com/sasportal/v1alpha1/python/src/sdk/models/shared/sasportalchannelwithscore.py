from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SasPortalChannelWithScore:
    r"""SasPortalChannelWithScore
    The channel with score.
    """
    
    frequency_range: Optional[SasPortalFrequencyRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequencyRange') }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    
