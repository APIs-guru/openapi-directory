from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import option


@dataclass_json
@dataclass
class EnumValue:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    options: Optional[List[option.Option]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    
