from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreativeFieldAssignment:
    r"""CreativeFieldAssignment
    Creative Field Assignment.
    """
    
    creative_field_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeFieldId') }})
    creative_field_value_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeFieldValueId') }})
    
