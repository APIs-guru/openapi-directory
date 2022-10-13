from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import house_enum


@dataclass_json
@dataclass
class StageReference:
    house: Optional[house_enum.HouseEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'house' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
