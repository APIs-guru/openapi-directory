from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import label


@dataclass_json
@dataclass
class ModifyLabelsResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    modified_labels: Optional[List[label.Label]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifiedLabels' }})
    
