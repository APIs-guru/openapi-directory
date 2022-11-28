from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ChannelSectionContentDetails:
    r"""ChannelSectionContentDetails
    Details about a channelsection, including playlists and channels.
    """
    
    channels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    playlists: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playlists') }})
    
