from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import episodesimple
from . import podcastsimple


@dataclass_json
@dataclass
class GetPodcastsInBatchResponse:
    latest_episodes: Optional[List[episodesimple.EpisodeSimple]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latest_episodes' }})
    podcasts: List[podcastsimple.PodcastSimple] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'podcasts' }})
    
