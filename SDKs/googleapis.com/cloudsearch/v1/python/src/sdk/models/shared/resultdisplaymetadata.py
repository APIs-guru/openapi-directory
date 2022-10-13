from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resultdisplayline


@dataclass_json
@dataclass
class ResultDisplayMetadata:
    metalines: Optional[List[resultdisplayline.ResultDisplayLine]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metalines' }})
    object_type_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectTypeLabel' }})
    
