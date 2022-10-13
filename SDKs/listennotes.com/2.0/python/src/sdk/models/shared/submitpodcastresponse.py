from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import podcastminimum

class SubmitPodcastResponseStatusEnum(str, Enum):
    FOUND = "found"
    IN_REVIEW = "in review"


@dataclass_json
@dataclass
class SubmitPodcastResponse:
    podcast: podcastminimum.PodcastMinimum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'podcast' }})
    status: SubmitPodcastResponseStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
