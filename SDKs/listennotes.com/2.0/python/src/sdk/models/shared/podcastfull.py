from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import episodeminimum
from . import podcastextrafield
from . import podcastlookingforfield
from . import podcasttypefield_enum


@dataclass_json
@dataclass
class PodcastFull:
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    earliest_pub_date_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'earliest_pub_date_ms' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    episodes: Optional[List[episodeminimum.EpisodeMinimum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'episodes' }})
    explicit_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'explicit_content' }})
    extra: Optional[podcastextrafield.PodcastExtraField] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extra' }})
    genre_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'genre_ids' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    is_claimed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_claimed' }})
    itunes_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itunes_id' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    latest_pub_date_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latest_pub_date_ms' }})
    listen_score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listen_score' }})
    listen_score_global_rank: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listen_score_global_rank' }})
    listennotes_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listennotes_url' }})
    looking_for: Optional[podcastlookingforfield.PodcastLookingForField] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'looking_for' }})
    next_episode_pub_date: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_episode_pub_date' }})
    publisher: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisher' }})
    rss: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rss' }})
    thumbnail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnail' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    total_episodes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_episodes' }})
    type: Optional[podcasttypefield_enum.PodcastTypeFieldEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'website' }})
    
