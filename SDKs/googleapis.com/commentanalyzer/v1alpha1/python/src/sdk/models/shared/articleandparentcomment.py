from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ArticleAndParentComment:
    r"""ArticleAndParentComment
    A type of context specific to a comment left on a single-threaded comment message board, where comments are either a top level comment or the child of a top level comment.
    """
    
    article: Optional[TextEntry] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('article') }})
    parent_comment: Optional[TextEntry] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parentComment') }})
    
