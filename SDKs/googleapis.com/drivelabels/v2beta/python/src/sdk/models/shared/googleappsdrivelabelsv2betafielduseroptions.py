from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaFieldUserOptions:
    r"""GoogleAppsDriveLabelsV2betaFieldUserOptions
    Options for the user field type.
    """
    
    list_options: Optional[GoogleAppsDriveLabelsV2betaFieldListOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listOptions') }})
    
