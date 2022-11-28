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
class GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse:
    r"""GoogleAppsDriveLabelsV2betaBatchUpdateLabelPermissionsResponse
    Response for updating one or more Label Permissions.
    """
    
    permissions: Optional[List[GoogleAppsDriveLabelsV2betaLabelPermission]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    
