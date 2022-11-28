from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetPodcastsInBatchResponse:
    podcasts: List[PodcastSimple] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('podcasts') }})
    latest_episodes: Optional[List[EpisodeSimple]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latest_episodes') }})
    
