from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SubmitPodcastResponseStatusEnum(str, Enum):
    FOUND = "found"
    IN_REVIEW = "in review"


@dataclass_json
@dataclass
class SubmitPodcastResponse:
    podcast: PodcastMinimum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('podcast') }})
    status: SubmitPodcastResponseStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
