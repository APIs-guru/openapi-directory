from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2FieldUserOptions:
    r"""GoogleAppsDriveLabelsV2FieldUserOptions
    Options for the user field type.
    """
    
    list_options: Optional[GoogleAppsDriveLabelsV2FieldListOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listOptions') }})
    
