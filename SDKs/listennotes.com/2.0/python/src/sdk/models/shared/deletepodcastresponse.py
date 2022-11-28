from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DeletePodcastResponseStatusEnum(str, Enum):
    DELETED = "deleted"
    IN_REVIEW = "in review"


@dataclass_json
@dataclass
class DeletePodcastResponse:
    status: DeletePodcastResponseStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
