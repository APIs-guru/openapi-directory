from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LiveBroadcast:
    r"""LiveBroadcast
    A *liveBroadcast* resource represents an event that will be streamed, via live video, on YouTube.
    """
    
    content_details: Optional[LiveBroadcastContentDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentDetails') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    snippet: Optional[LiveBroadcastSnippet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippet') }})
    statistics: Optional[LiveBroadcastStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statistics') }})
    status: Optional[LiveBroadcastStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
