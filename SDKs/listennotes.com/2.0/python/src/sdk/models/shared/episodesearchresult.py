from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import episodesearchresult_podcast


@dataclass_json
@dataclass
class EpisodeSearchResult:
    audio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audio' }})
    audio_length_sec: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audio_length_sec' }})
    description_highlighted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description_highlighted' }})
    description_original: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description_original' }})
    explicit_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'explicit_content' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    itunes_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itunes_id' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    listennotes_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listennotes_url' }})
    podcast: Optional[episodesearchresult_podcast.EpisodeSearchResultPodcast] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'podcast' }})
    pub_date_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pub_date_ms' }})
    rss: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rss' }})
    thumbnail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbnail' }})
    title_highlighted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title_highlighted' }})
    title_original: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title_original' }})
    transcripts_highlighted: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transcripts_highlighted' }})
    
