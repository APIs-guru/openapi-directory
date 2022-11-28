from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ItemCounts:
    r"""ItemCounts
    Class LibrarySummary.
    """
    
    album_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AlbumCount') }})
    artist_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ArtistCount') }})
    book_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BookCount') }})
    box_set_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BoxSetCount') }})
    episode_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EpisodeCount') }})
    item_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ItemCount') }})
    movie_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MovieCount') }})
    music_video_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MusicVideoCount') }})
    program_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProgramCount') }})
    series_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SeriesCount') }})
    song_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SongCount') }})
    trailer_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrailerCount') }})
    
