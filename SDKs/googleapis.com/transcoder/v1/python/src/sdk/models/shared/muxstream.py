from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MuxStream:
    r"""MuxStream
    Multiplexing settings for output stream.
    """
    
    container: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('container') }})
    elementary_streams: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elementaryStreams') }})
    file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileName') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    segment_settings: Optional[SegmentSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segmentSettings') }})
    
