from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import comment


@dataclass_json
@dataclass
class CommentThreadReplies:
    comments: Optional[List[comment.Comment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    
