from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PullRequestFilterCommentControlEnum(str, Enum):
    COMMENTS_DISABLED = "COMMENTS_DISABLED"
    COMMENTS_ENABLED = "COMMENTS_ENABLED"
    COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY = "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"


@dataclass_json
@dataclass
class PullRequestFilter:
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'branch' }})
    comment_control: Optional[PullRequestFilterCommentControlEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commentControl' }})
    invert_regex: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invertRegex' }})
    
