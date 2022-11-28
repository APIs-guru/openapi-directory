from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PositionedObject:
    r"""PositionedObject
    An object that's tethered to a Paragraph and positioned relative to the beginning of the paragraph. A PositionedObject contains an EmbeddedObject such as an image.
    """
    
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    positioned_object_properties: Optional[PositionedObjectProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('positionedObjectProperties') }})
    suggested_deletion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedDeletionIds') }})
    suggested_insertion_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedInsertionId') }})
    suggested_positioned_object_properties_changes: Optional[dict[str, SuggestedPositionedObjectProperties]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedPositionedObjectPropertiesChanges') }})
    
