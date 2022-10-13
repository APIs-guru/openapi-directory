from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import actionparameter


@dataclass_json
@dataclass
class FormAction:
    action_method_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionMethodName' }})
    parameters: Optional[List[actionparameter.ActionParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    
