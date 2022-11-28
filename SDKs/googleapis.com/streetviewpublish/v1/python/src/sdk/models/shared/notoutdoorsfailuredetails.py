from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NotOutdoorsFailureDetails:
    r"""NotOutdoorsFailureDetails
    Details related to ProcessingFailureReason#NOT_OUTDOORS. If there are multiple indoor frames found, the first frame is recorded here.
    """
    
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    
