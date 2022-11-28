from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TimeTarget:
    r"""TimeTarget
    A target publish or event time. Can be used for seeking to or retrieving the corresponding cursor.
    """
    
    event_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTime') }})
    publish_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishTime') }})
    
