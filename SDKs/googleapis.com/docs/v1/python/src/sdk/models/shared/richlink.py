from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RichLink:
    r"""RichLink
    A link to a Google resource (such as a file in Drive, a YouTube video, or a Calendar event).
    """
    
    rich_link_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('richLinkId') }})
    rich_link_properties: Optional[RichLinkProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('richLinkProperties') }})
    suggested_deletion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedDeletionIds') }})
    suggested_insertion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedInsertionIds') }})
    suggested_text_style_changes: Optional[dict[str, SuggestedTextStyle]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedTextStyleChanges') }})
    text_style: Optional[TextStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textStyle') }})
    

@dataclass_json
@dataclass
class RichLinkInput:
    r"""RichLinkInput
    A link to a Google resource (such as a file in Drive, a YouTube video, or a Calendar event).
    """
    
    suggested_deletion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedDeletionIds') }})
    suggested_insertion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedInsertionIds') }})
    suggested_text_style_changes: Optional[dict[str, SuggestedTextStyle]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedTextStyleChanges') }})
    text_style: Optional[TextStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textStyle') }})
    
