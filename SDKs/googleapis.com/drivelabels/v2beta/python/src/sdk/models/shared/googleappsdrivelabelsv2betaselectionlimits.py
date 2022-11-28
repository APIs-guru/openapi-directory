from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaSelectionLimits:
    r"""GoogleAppsDriveLabelsV2betaSelectionLimits
    Limits for selection Field type.
    """
    
    list_limits: Optional[GoogleAppsDriveLabelsV2betaListLimits] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listLimits') }})
    max_choices: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxChoices') }})
    max_deleted_choices: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxDeletedChoices') }})
    max_display_name_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxDisplayNameLength') }})
    max_id_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxIdLength') }})
    
