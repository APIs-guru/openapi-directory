from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import listproperties
from . import suggestedlistproperties


@dataclass_json
@dataclass
class List:
    list_properties: Optional[listproperties.ListProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listProperties' }})
    suggested_deletion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestedDeletionIds' }})
    suggested_insertion_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestedInsertionId' }})
    suggested_list_properties_changes: Optional[dict[str, suggestedlistproperties.SuggestedListProperties]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestedListPropertiesChanges' }})
    
