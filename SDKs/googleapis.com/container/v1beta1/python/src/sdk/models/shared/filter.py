from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class FilterEventTypeEnum(str, Enum):
    EVENT_TYPE_UNSPECIFIED = "EVENT_TYPE_UNSPECIFIED"
    UPGRADE_AVAILABLE_EVENT = "UPGRADE_AVAILABLE_EVENT"
    UPGRADE_EVENT = "UPGRADE_EVENT"
    SECURITY_BULLETIN_EVENT = "SECURITY_BULLETIN_EVENT"


@dataclass_json
@dataclass
class Filter:
    event_type: Optional[List[FilterEventTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventType' }})
    
