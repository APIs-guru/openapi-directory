from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2FieldSelectionOptions:
    r"""GoogleAppsDriveLabelsV2FieldSelectionOptions
    Options for the selection field type.
    """
    
    choices: Optional[List[GoogleAppsDriveLabelsV2FieldSelectionOptionsChoice]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('choices') }})
    list_options: Optional[GoogleAppsDriveLabelsV2FieldListOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listOptions') }})
    
