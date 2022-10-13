from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy:
    hide_in_search: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hideInSearch' }})
    show_in_apply: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showInApply' }})
    
