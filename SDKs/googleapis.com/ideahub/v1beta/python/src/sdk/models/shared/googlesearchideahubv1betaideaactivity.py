from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleSearchIdeahubV1betaIdeaActivityTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    POST_DRAFTED = "POST_DRAFTED"
    POST_PUBLISHED = "POST_PUBLISHED"
    POST_DELETED = "POST_DELETED"
    POST_UNPUBLISHED = "POST_UNPUBLISHED"


@dataclass_json
@dataclass
class GoogleSearchIdeahubV1betaIdeaActivity:
    r"""GoogleSearchIdeahubV1betaIdeaActivity
    An idea activity entry.
    """
    
    ideas: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ideas') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    topics: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topics') }})
    type: Optional[GoogleSearchIdeahubV1betaIdeaActivityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
