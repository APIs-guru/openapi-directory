from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import layoutplaceholderidmapping
from . import layoutreference


@dataclass_json
@dataclass
class CreateSlideRequest:
    insertion_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertionIndex' }})
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectId' }})
    placeholder_id_mappings: Optional[List[layoutplaceholderidmapping.LayoutPlaceholderIDMapping]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placeholderIdMappings' }})
    slide_layout_reference: Optional[layoutreference.LayoutReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slideLayoutReference' }})
    
