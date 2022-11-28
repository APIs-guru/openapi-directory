from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1TimeSegment:
    r"""GoogleCloudDatalabelingV1beta1TimeSegment
    A time period inside of an example that has a time dimension (e.g. video).
    """
    
    end_time_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTimeOffset') }})
    start_time_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTimeOffset') }})
    
