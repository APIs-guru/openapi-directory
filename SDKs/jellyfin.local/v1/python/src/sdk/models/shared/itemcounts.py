from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ItemCounts:
    album_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlbumCount' }})
    artist_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ArtistCount' }})
    book_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BookCount' }})
    box_set_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BoxSetCount' }})
    episode_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EpisodeCount' }})
    item_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ItemCount' }})
    movie_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MovieCount' }})
    music_video_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MusicVideoCount' }})
    program_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProgramCount' }})
    series_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SeriesCount' }})
    song_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SongCount' }})
    trailer_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TrailerCount' }})
    
