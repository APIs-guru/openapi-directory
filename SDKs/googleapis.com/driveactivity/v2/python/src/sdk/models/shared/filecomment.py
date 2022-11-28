from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FileComment:
    r"""FileComment
    A comment on a file.
    """
    
    legacy_comment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legacyCommentId') }})
    legacy_discussion_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legacyDiscussionId') }})
    link_to_discussion: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkToDiscussion') }})
    parent: Optional[DriveItem] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    
