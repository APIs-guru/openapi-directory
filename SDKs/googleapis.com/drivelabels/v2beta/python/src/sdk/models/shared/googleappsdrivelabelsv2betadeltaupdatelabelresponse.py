from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse:
    r"""GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponse
    Response for Label update.
    """
    
    responses: Optional[List[GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responses') }})
    updated_label: Optional[GoogleAppsDriveLabelsV2betaLabel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedLabel') }})
    
