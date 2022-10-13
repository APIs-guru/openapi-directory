from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import systemparameterrule


@dataclass_json
@dataclass
class SystemParameters:
    rules: Optional[List[systemparameterrule.SystemParameterRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    
