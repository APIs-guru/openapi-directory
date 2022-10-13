from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import podcastsimple


@dataclass_json
@dataclass
class EpisodeFull:
    audio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audio' }})
    audio_length_sec: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audio_length_sec' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    explicit_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'explicit_content' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    listennotes_edit_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listennotes_edit_url' }})
    listennotes_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listennotes_url' }})
    maybe_audio_invalid: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maybe_audio_invalid' }})
    podcast: Optional[podcastsimple.PodcastSimple] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'podcast' }})
    pub_date_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pub_date_ms' }})
    thumbnail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnail' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    transcript: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transcript' }})
    
