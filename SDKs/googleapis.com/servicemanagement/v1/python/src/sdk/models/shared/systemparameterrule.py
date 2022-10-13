from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import systemparameter


@dataclass_json
@dataclass
class SystemParameterRule:
    parameters: Optional[List[systemparameter.SystemParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    selector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selector' }})
    
