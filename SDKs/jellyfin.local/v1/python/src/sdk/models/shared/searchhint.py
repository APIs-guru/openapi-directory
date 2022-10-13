from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SearchHint:
    album: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Album' }})
    album_artist: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlbumArtist' }})
    album_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AlbumId' }})
    artists: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Artists' }})
    backdrop_image_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackdropImageItemId' }})
    backdrop_image_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BackdropImageTag' }})
    channel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChannelId' }})
    channel_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChannelName' }})
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    episode_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EpisodeCount' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    index_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexNumber' }})
    is_folder: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsFolder' }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ItemId' }})
    matched_term: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MatchedTerm' }})
    media_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MediaType' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    parent_index_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParentIndexNumber' }})
    primary_image_aspect_ratio: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrimaryImageAspectRatio' }})
    primary_image_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrimaryImageTag' }})
    production_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductionYear' }})
    run_time_ticks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RunTimeTicks' }})
    series: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Series' }})
    song_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SongCount' }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    thumb_image_item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThumbImageItemId' }})
    thumb_image_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThumbImageTag' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
