from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaFieldProperties:
    r"""GoogleAppsDriveLabelsV2betaFieldProperties
    The basic properties of the field.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    insert_before_field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertBeforeField') }})
    required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required') }})
    
