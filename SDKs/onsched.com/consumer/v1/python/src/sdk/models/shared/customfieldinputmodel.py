from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CustomFieldInputModel:
    field1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field1') }})
    field10: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field10') }})
    field2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field2') }})
    field3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field3') }})
    field4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field4') }})
    field5: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field5') }})
    field6: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field6') }})
    field7: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field7') }})
    field8: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field8') }})
    field9: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field9') }})
    
