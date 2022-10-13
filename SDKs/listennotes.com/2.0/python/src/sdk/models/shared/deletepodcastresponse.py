from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class DeletePodcastResponseStatusEnum(str, Enum):
    DELETED = "deleted"
    IN_REVIEW = "in review"


@dataclass_json
@dataclass
class DeletePodcastResponse:
    status: DeletePodcastResponseStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
