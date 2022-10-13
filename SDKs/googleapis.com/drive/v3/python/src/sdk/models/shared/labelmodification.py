from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import labelfieldmodification


@dataclass_json
@dataclass
class LabelModification:
    field_modifications: Optional[List[labelfieldmodification.LabelFieldModification]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldModifications' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    label_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelId' }})
    remove_label: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'removeLabel' }})
    
