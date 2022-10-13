from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import debugoptions

class PollItemsRequestStatusCodesEnum(str, Enum):
    CODE_UNSPECIFIED = "CODE_UNSPECIFIED"
    ERROR = "ERROR"
    MODIFIED = "MODIFIED"
    NEW_ITEM = "NEW_ITEM"
    ACCEPTED = "ACCEPTED"


@dataclass_json
@dataclass
class PollItemsRequest:
    connector_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectorName' }})
    debug_options: Optional[debugoptions.DebugOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debugOptions' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    queue: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queue' }})
    status_codes: Optional[List[PollItemsRequestStatusCodesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusCodes' }})
    
