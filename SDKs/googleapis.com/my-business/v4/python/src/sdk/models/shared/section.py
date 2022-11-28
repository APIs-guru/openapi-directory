from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SectionSectionTypeEnum(str, Enum):
    SECTION_TYPE_UNSPECIFIED = "SECTION_TYPE_UNSPECIFIED"
    FOOD = "FOOD"
    SERVICES = "SERVICES"


@dataclass_json
@dataclass
class Section:
    r"""Section
    A section of the price list containing one or more items.
    """
    
    items: Optional[List[Item]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    labels: Optional[List[Label]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    section_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sectionId') }})
    section_type: Optional[SectionSectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sectionType') }})
    
