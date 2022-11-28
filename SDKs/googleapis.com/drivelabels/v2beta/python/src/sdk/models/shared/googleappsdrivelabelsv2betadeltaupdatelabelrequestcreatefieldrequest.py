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
class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequestInput:
    r"""GoogleAppsDriveLabelsV2betaDeltaUpdateLabelRequestCreateFieldRequestInput
    Request to create a Field within a Label.
    """
    
    field: Optional[GoogleAppsDriveLabelsV2betaFieldInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    
