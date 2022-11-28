from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1VideoThumbnail:
    r"""GoogleCloudDatalabelingV1beta1VideoThumbnail
    Container of information of a video thumbnail.
    """
    
    thumbnail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbnail') }})
    time_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeOffset') }})
    
