from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ChannelContentDetailsRelatedPlaylists:
    favorites: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('favorites') }})
    likes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('likes') }})
    uploads: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploads') }})
    watch_history: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchHistory') }})
    watch_later: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('watchLater') }})
    

@dataclass_json
@dataclass
class ChannelContentDetails:
    r"""ChannelContentDetails
    Details about the content of a channel.
    """
    
    related_playlists: Optional[ChannelContentDetailsRelatedPlaylists] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relatedPlaylists') }})
    
