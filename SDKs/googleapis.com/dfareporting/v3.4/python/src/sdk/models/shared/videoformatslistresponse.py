from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VideoFormatsListResponse:
    r"""VideoFormatsListResponse
    Video Format List Response
    """
    
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    video_formats: Optional[List[VideoFormat]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoFormats') }})
    
