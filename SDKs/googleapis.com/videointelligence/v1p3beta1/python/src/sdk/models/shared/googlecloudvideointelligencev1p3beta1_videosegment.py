from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudVideointelligenceV1p3beta1VideoSegment:
    r"""GoogleCloudVideointelligenceV1p3beta1VideoSegment
    Video segment.
    """
    
    end_time_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTimeOffset') }})
    start_time_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTimeOffset') }})
    
