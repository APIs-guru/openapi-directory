from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponse:
    r"""GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponse
    Response following update to Field properties.
    """
    
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    
