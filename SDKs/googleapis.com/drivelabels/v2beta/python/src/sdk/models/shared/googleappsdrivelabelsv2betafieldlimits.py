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
class GoogleAppsDriveLabelsV2betaFieldLimits:
    r"""GoogleAppsDriveLabelsV2betaFieldLimits
    Field constants governing the structure of a Field; such as, the maximum title length, minimum and maximum field values or length, etc.
    """
    
    date_limits: Optional[GoogleAppsDriveLabelsV2betaDateLimits] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateLimits') }})
    integer_limits: Optional[GoogleAppsDriveLabelsV2betaIntegerLimits] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integerLimits') }})
    long_text_limits: Optional[GoogleAppsDriveLabelsV2betaLongTextLimits] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longTextLimits') }})
    max_description_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxDescriptionLength') }})
    max_display_name_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxDisplayNameLength') }})
    max_id_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxIdLength') }})
    selection_limits: Optional[GoogleAppsDriveLabelsV2betaSelectionLimits] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectionLimits') }})
    text_limits: Optional[GoogleAppsDriveLabelsV2betaTextLimits] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textLimits') }})
    user_limits: Optional[GoogleAppsDriveLabelsV2betaUserLimits] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLimits') }})
    
