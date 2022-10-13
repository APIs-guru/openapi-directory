from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import parameter


@dataclass_json
@dataclass
class Macro:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    container_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerId' }})
    disabling_rule_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disablingRuleId' }})
    enabling_rule_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enablingRuleId' }})
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprint' }})
    macro_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'macroId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    parameter: Optional[List[parameter.Parameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameter' }})
    parent_folder_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentFolderId' }})
    schedule_end_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleEndMs' }})
    schedule_start_ms: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleStartMs' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
