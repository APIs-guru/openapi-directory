from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import location

class CreateHeaderRequestTypeEnum(str, Enum):
    HEADER_FOOTER_TYPE_UNSPECIFIED = "HEADER_FOOTER_TYPE_UNSPECIFIED"
    DEFAULT = "DEFAULT"


@dataclass_json
@dataclass
class CreateHeaderRequest:
    section_break_location: Optional[location.Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sectionBreakLocation' }})
    type: Optional[CreateHeaderRequestTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
