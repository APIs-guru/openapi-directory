from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class InsertSectionBreakRequestSectionTypeEnum(str, Enum):
    SECTION_TYPE_UNSPECIFIED = "SECTION_TYPE_UNSPECIFIED"
    CONTINUOUS = "CONTINUOUS"
    NEXT_PAGE = "NEXT_PAGE"


@dataclass_json
@dataclass
class InsertSectionBreakRequest:
    r"""InsertSectionBreakRequest
    Inserts a section break at the given location. A newline character will be inserted before the section break.
    """
    
    end_of_segment_location: Optional[EndOfSegmentLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endOfSegmentLocation') }})
    location: Optional[Location] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    section_type: Optional[InsertSectionBreakRequestSectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sectionType') }})
    
