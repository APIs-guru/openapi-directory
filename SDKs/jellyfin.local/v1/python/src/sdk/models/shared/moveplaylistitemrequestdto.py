from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MovePlaylistItemRequestDto:
    r"""MovePlaylistItemRequestDto
    Class MovePlaylistItemRequestDto.
    """
    
    new_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NewIndex') }})
    playlist_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlaylistItemId') }})
    
