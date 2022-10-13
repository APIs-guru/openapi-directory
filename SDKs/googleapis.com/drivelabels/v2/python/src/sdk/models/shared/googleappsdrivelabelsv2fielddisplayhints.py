from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2FieldDisplayHints:
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabled' }})
    hidden_in_search: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hiddenInSearch' }})
    required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required' }})
    shown_in_apply: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shownInApply' }})
    
