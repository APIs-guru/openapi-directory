from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import podcastsimple


@dataclass_json
@dataclass
class GetPodcastRecommendationsResponse:
    recommendations: List[podcastsimple.PodcastSimple] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recommendations' }})
    
