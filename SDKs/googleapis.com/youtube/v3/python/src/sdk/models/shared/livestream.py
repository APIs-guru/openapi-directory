from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LiveStream:
    r"""LiveStream
    A live stream describes a live ingestion point.
    """
    
    cdn: Optional[CdnSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cdn') }})
    content_details: Optional[LiveStreamContentDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentDetails') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    snippet: Optional[LiveStreamSnippet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippet') }})
    status: Optional[LiveStreamStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
