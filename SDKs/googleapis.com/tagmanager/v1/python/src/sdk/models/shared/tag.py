from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import parameter
from . import parameter
from . import setuptag
from . import teardowntag

class TagTagFiringOptionEnum(str, Enum):
    UNLIMITED = "unlimited"
    ONCE_PER_EVENT = "oncePerEvent"
    ONCE_PER_LOAD = "oncePerLoad"


@dataclass_json
@dataclass
class Tag:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    blocking_rule_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockingRuleId' }})
    blocking_trigger_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockingTriggerId' }})
    container_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerId' }})
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprint' }})
    firing_rule_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firingRuleId' }})
    firing_trigger_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firingTriggerId' }})
    live_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'liveOnly' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    parameter: Optional[List[parameter.Parameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameter' }})
    parent_folder_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentFolderId' }})
    paused: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paused' }})
    priority: Optional[parameter.Parameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    schedule_end_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleEndMs' }})
    schedule_start_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleStartMs' }})
    setup_tag: Optional[List[setuptag.SetupTag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'setupTag' }})
    tag_firing_option: Optional[TagTagFiringOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagFiringOption' }})
    tag_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagId' }})
    teardown_tag: Optional[List[teardowntag.TeardownTag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teardownTag' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
