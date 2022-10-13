from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import item
from . import label

class SectionSectionTypeEnum(str, Enum):
    SECTION_TYPE_UNSPECIFIED = "SECTION_TYPE_UNSPECIFIED"
    FOOD = "FOOD"
    SERVICES = "SERVICES"


@dataclass_json
@dataclass
class Section:
    items: Optional[List[item.Item]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    labels: Optional[List[label.Label]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    section_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sectionId' }})
    section_type: Optional[SectionSectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sectionType' }})
    
