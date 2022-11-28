from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PullRequestFilterCommentControlEnum(str, Enum):
    COMMENTS_DISABLED = "COMMENTS_DISABLED"
    COMMENTS_ENABLED = "COMMENTS_ENABLED"
    COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY = "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"


@dataclass_json
@dataclass
class PullRequestFilter:
    r"""PullRequestFilter
    PullRequestFilter contains filter properties for matching GitHub Pull Requests.
    """
    
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    comment_control: Optional[PullRequestFilterCommentControlEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commentControl') }})
    invert_regex: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invertRegex') }})
    
