from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import episodesimple


@dataclass_json
@dataclass
class GetEpisodesInBatchResponse:
    episodes: List[episodesimple.EpisodeSimple] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'episodes' }})
    
