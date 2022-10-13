from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import labelmodification


@dataclass_json
@dataclass
class ModifyLabelsRequest:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    label_modifications: Optional[List[labelmodification.LabelModification]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelModifications' }})
    
