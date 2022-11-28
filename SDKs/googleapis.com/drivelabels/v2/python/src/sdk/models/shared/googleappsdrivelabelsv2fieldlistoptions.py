from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2FieldListOptions:
    r"""GoogleAppsDriveLabelsV2FieldListOptions
    Options for a multi-valued variant of an associated field type.
    """
    
    max_entries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxEntries') }})
    
