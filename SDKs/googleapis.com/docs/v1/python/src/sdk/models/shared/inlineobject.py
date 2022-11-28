from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InlineObject:
    r"""InlineObject
    An object that appears inline with text. An InlineObject contains an EmbeddedObject such as an image.
    """
    
    inline_object_properties: Optional[InlineObjectProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inlineObjectProperties') }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    suggested_deletion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedDeletionIds') }})
    suggested_inline_object_properties_changes: Optional[dict[str, SuggestedInlineObjectProperties]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedInlineObjectPropertiesChanges') }})
    suggested_insertion_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedInsertionId') }})
    
