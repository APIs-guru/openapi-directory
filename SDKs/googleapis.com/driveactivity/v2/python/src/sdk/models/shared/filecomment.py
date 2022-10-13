from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import driveitem


@dataclass_json
@dataclass
class FileComment:
    legacy_comment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legacyCommentId' }})
    legacy_discussion_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legacyDiscussionId' }})
    link_to_discussion: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkToDiscussion' }})
    parent: Optional[driveitem.DriveItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    
