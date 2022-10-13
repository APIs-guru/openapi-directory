from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inlineobjectproperties
from . import suggestedinlineobjectproperties


@dataclass_json
@dataclass
class InlineObject:
    inline_object_properties: Optional[inlineobjectproperties.InlineObjectProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inlineObjectProperties' }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId' }})
    suggested_deletion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestedDeletionIds' }})
    suggested_inline_object_properties_changes: Optional[dict[str, suggestedinlineobjectproperties.SuggestedInlineObjectProperties]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestedInlineObjectPropertiesChanges' }})
    suggested_insertion_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestedInsertionId' }})
    
