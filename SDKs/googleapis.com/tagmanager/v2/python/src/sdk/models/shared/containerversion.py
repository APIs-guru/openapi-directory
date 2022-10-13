from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import builtinvariable
from . import client
from . import container
from . import customtemplate
from . import folder
from . import tag
from . import trigger
from . import variable
from . import zone


@dataclass_json
@dataclass
class ContainerVersion:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    built_in_variable: Optional[List[builtinvariable.BuiltInVariable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'builtInVariable' }})
    client: Optional[List[client.Client]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client' }})
    container: Optional[container.Container] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'container' }})
    container_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerId' }})
    container_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerVersionId' }})
    custom_template: Optional[List[customtemplate.CustomTemplate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customTemplate' }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprint' }})
    folder: Optional[List[folder.Folder]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'folder' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    tag: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    tag_manager_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagManagerUrl' }})
    trigger: Optional[List[trigger.Trigger]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trigger' }})
    variable: Optional[List[variable.Variable]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variable' }})
    zone: Optional[List[zone.Zone]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zone' }})
    
