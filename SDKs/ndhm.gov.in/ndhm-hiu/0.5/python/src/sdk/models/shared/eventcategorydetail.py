from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import carecontextdefinition
from . import hitypeenum_enum


@dataclass_json
@dataclass
class EventCategoryDetail:
    care_context: carecontextdefinition.CareContextDefinition = field(default=None, metadata={'dataclasses_json': { 'field_name': 'careContext' }})
    hi_types: List[hitypeenum_enum.HiTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hiTypes' }})
    
