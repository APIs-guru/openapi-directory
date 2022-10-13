from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RepeatedEnumAttributeValue:
    set_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'setValues' }})
    unset_values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unsetValues' }})
    
