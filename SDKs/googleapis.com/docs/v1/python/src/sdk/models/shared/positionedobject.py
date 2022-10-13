from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import positionedobjectproperties
from . import suggestedpositionedobjectproperties


@dataclass_json
@dataclass
class PositionedObject:
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId' }})
    positioned_object_properties: Optional[positionedobjectproperties.PositionedObjectProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'positionedObjectProperties' }})
    suggested_deletion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestedDeletionIds' }})
    suggested_insertion_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestedInsertionId' }})
    suggested_positioned_object_properties_changes: Optional[dict[str, suggestedpositionedobjectproperties.SuggestedPositionedObjectProperties]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestedPositionedObjectPropertiesChanges' }})
    
