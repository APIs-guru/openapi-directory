from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ResponseDebugInfo:
    enabled_experiments: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabledExperiments' }})
    formatted_debug_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'formattedDebugInfo' }})
    
