from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PushItemTypeEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    MODIFIED = "MODIFIED"
    NOT_MODIFIED = "NOT_MODIFIED"
    REPOSITORY_ERROR = "REPOSITORY_ERROR"
    REQUEUE = "REQUEUE"


@dataclass_json
@dataclass
class PushItem:
    r"""PushItem
    Represents an item to be pushed to the indexing queue.
    """
    
    content_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentHash') }})
    metadata_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadataHash') }})
    payload: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    queue: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queue') }})
    repository_error: Optional[RepositoryError] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryError') }})
    structured_data_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('structuredDataHash') }})
    type: Optional[PushItemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
