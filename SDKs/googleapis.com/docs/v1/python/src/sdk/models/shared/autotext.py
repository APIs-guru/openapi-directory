from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AutoTextTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    PAGE_NUMBER = "PAGE_NUMBER"
    PAGE_COUNT = "PAGE_COUNT"


@dataclass_json
@dataclass
class AutoText:
    r"""AutoText
    A ParagraphElement representing a spot in the text that's dynamically replaced with content that can change over time, like a page number.
    """
    
    suggested_deletion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedDeletionIds') }})
    suggested_insertion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedInsertionIds') }})
    suggested_text_style_changes: Optional[dict[str, SuggestedTextStyle]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedTextStyleChanges') }})
    text_style: Optional[TextStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textStyle') }})
    type: Optional[AutoTextTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
