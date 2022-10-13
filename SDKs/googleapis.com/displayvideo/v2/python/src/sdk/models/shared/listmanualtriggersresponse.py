from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import manualtrigger


@dataclass_json
@dataclass
class ListManualTriggersResponse:
    manual_triggers: Optional[List[manualtrigger.ManualTrigger]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manualTriggers' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
