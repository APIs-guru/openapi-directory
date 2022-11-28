from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LabelValue:
    r"""LabelValue
    A label value.
    """
    
    bool_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boolValue') }})
    int64_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('int64Value') }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValue') }})
    
