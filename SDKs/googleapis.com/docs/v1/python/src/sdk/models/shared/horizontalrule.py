from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HorizontalRule:
    r"""HorizontalRule
    A ParagraphElement representing a horizontal line.
    """
    
    suggested_deletion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedDeletionIds') }})
    suggested_insertion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedInsertionIds') }})
    suggested_text_style_changes: Optional[dict[str, SuggestedTextStyle]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedTextStyleChanges') }})
    text_style: Optional[TextStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textStyle') }})
    
