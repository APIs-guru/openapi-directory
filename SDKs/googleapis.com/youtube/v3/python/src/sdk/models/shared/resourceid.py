from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResourceID:
    r"""ResourceID
    A resource id is a generic reference that points to another YouTube resource.
    """
    
    channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelId') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    playlist_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playlistId') }})
    video_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoId') }})
    
