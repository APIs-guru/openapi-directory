from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customerrorrule


@dataclass_json
@dataclass
class CustomError:
    rules: Optional[List[customerrorrule.CustomErrorRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'types' }})
    
