from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import endofsegmentlocation
from . import location

class InsertSectionBreakRequestSectionTypeEnum(str, Enum):
    SECTION_TYPE_UNSPECIFIED = "SECTION_TYPE_UNSPECIFIED"
    CONTINUOUS = "CONTINUOUS"
    NEXT_PAGE = "NEXT_PAGE"


@dataclass_json
@dataclass
class InsertSectionBreakRequest:
    end_of_segment_location: Optional[endofsegmentlocation.EndOfSegmentLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endOfSegmentLocation' }})
    location: Optional[location.Location] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    section_type: Optional[InsertSectionBreakRequestSectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sectionType' }})
    
