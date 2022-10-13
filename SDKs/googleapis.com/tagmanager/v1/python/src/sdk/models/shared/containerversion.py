from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import container
from . import folder
from . import macro
from . import rule
from . import tag
from . import trigger
from . import variable


@dataclass_json
@dataclass
class ContainerVersion:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    container: Optional[container.Container] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'container' }})
    container_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerId' }})
    container_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerVersionId' }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprint' }})
    folder: Optional[List[folder.Folder]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'folder' }})
    macro: Optional[List[macro.Macro]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'macro' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    rule: Optional[List[rule.Rule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rule' }})
    tag: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    trigger: Optional[List[trigger.Trigger]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trigger' }})
    variable: Optional[List[variable.Variable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variable' }})
    
