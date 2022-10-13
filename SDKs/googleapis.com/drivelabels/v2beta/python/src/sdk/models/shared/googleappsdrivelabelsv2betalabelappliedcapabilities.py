from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities:
    can_apply: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canApply' }})
    can_read: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canRead' }})
    can_remove: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canRemove' }})
    
