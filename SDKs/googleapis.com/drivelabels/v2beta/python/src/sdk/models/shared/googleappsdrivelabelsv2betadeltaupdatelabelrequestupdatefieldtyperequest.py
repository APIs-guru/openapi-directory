from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequestInput:
    r"""GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestUpdateFieldTypeRequestInput
    Request to change the type of a Field.
    """
    
    date_options: Optional[GoogleAppsDriveLabelsV2betaFieldDateOptionsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateOptions') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    selection_options: Optional[GoogleAppsDriveLabelsV2betaFieldSelectionOptionsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectionOptions') }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    user_options: Optional[GoogleAppsDriveLabelsV2betaFieldUserOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userOptions') }})
    
