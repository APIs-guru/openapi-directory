from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput:
    r"""GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput
    Options for the selection field type.
    """
    
    choices: Optional[List[GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoiceInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('choices') }})
    list_options: Optional[GoogleAppsDriveLabelsV2betaFieldListOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listOptions') }})
    

@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaFieldSelectionOptions:
    r"""GoogleAppsDriveLabelsV2betaFieldSelectionOptions
    Options for the selection field type.
    """
    
    choices: Optional[List[GoogleAppsDriveLabelsV2betaFieldSelectionOptionsChoice]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('choices') }})
    list_options: Optional[GoogleAppsDriveLabelsV2betaFieldListOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listOptions') }})
    
