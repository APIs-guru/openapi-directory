from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class FilterEventTypeEnum(str, Enum):
    EVENT_TYPE_UNSPECIFIED = "EVENT_TYPE_UNSPECIFIED"
    UPGRADE_AVAILABLE_EVENT = "UPGRADE_AVAILABLE_EVENT"
    UPGRADE_EVENT = "UPGRADE_EVENT"
    SECURITY_BULLETIN_EVENT = "SECURITY_BULLETIN_EVENT"


@dataclass_json
@dataclass
class Filter:
    r"""Filter
    Allows filtering to one or more specific event types. If event types are present, those and only those event types will be transmitted to the cluster. Other types will be skipped. If no filter is specified, or no event types are present, all event types will be sent
    """
    
    event_type: Optional[List[FilterEventTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    
