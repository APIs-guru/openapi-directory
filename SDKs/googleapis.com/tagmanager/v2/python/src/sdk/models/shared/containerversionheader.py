from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ContainerVersionHeader:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    container_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerId' }})
    container_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerVersionId' }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    num_clients: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numClients' }})
    num_custom_templates: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numCustomTemplates' }})
    num_macros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numMacros' }})
    num_rules: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numRules' }})
    num_tags: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numTags' }})
    num_triggers: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numTriggers' }})
    num_variables: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numVariables' }})
    num_zones: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numZones' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    
