from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gcfsconfig
from . import nodepoolloggingconfig


@dataclass_json
@dataclass
class NodeConfigDefaults:
    gcfs_config: Optional[gcfsconfig.GcfsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcfsConfig' }})
    logging_config: Optional[nodepoolloggingconfig.NodePoolLoggingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loggingConfig' }})
    
