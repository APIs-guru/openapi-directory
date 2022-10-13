from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import placeholder


@dataclass_json
@dataclass
class LayoutPlaceholderIDMapping:
    layout_placeholder: Optional[placeholder.Placeholder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layoutPlaceholder' }})
    layout_placeholder_object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layoutPlaceholderObjectId' }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId' }})
    
