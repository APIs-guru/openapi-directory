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
class PatchServiceAccountRequestInput:
    r"""PatchServiceAccountRequestInput
    The service account patch request. You can patch only the `display_name` and `description` fields. You must use the `update_mask` field to specify which of these fields you want to patch. Only the fields specified in the request are guaranteed to be returned in the response. Other fields may be empty in the response.
    """
    
    service_account: Optional[ServiceAccountInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    
