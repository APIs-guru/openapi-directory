from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import booleancondition


@dataclass_json
@dataclass
class DataValidationRule:
    condition: Optional[booleancondition.BooleanCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    input_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inputMessage' }})
    show_custom_ui: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showCustomUi' }})
    strict: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'strict' }})
    
