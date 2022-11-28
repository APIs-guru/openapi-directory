from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TextRun:
    r"""TextRun
    A ParagraphElement that represents a run of text that all has the same styling.
    """
    
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    suggested_deletion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedDeletionIds') }})
    suggested_insertion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedInsertionIds') }})
    suggested_text_style_changes: Optional[dict[str, SuggestedTextStyle]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedTextStyleChanges') }})
    text_style: Optional[TextStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textStyle') }})
    
