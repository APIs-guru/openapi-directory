from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import configchange


@dataclass_json
@dataclass
class ChangeReport:
    config_changes: Optional[List[configchange.ConfigChange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configChanges' }})
    
