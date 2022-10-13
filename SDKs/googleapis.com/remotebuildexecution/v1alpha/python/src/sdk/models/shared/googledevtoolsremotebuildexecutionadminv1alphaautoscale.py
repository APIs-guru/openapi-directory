from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale:
    max_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxSize' }})
    min_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minSize' }})
    
