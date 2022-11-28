from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class List:
    r"""List
    A List represents the list attributes for a group of paragraphs that all belong to the same list. A paragraph that's part of a list has a reference to the list's ID in its bullet.
    """
    
    list_properties: Optional[ListProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listProperties') }})
    suggested_deletion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedDeletionIds') }})
    suggested_insertion_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedInsertionId') }})
    suggested_list_properties_changes: Optional[dict[str, SuggestedListProperties]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestedListPropertiesChanges') }})
    
