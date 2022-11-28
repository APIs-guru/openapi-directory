from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaFieldTextOptions:
    r"""GoogleAppsDriveLabelsV2betaFieldTextOptions
    Options for the Text field type.
    """
    
    max_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxLength') }})
    min_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minLength') }})
    
