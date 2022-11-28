from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Option:
    r"""Option
    An option for a field value.
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_order: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayOrder') }})
    double_data: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('doubleData') }})
    hidden: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hidden') }})
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    read_only: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('readOnly') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
