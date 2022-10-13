from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import nodeconfigdefaults


@dataclass_json
@dataclass
class NodePoolDefaults:
    node_config_defaults: Optional[nodeconfigdefaults.NodeConfigDefaults] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeConfigDefaults' }})
    
