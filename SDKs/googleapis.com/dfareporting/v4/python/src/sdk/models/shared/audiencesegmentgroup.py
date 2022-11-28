from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AudienceSegmentGroup:
    r"""AudienceSegmentGroup
    Audience Segment Group.
    """
    
    audience_segments: Optional[List[AudienceSegment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audienceSegments') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
