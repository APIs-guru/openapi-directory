from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleFirebaseFcmDataV1beta1MessageInsightPercents:
    r"""GoogleFirebaseFcmDataV1beta1MessageInsightPercents
    Additional information about message delivery. All percentages are calculated with countMessagesAccepted as the denominator.
    """
    
    priority_lowered: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priorityLowered') }})
    
