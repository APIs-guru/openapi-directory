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
class UpdateProtectedRangeRequest:
    r"""UpdateProtectedRangeRequest
    Updates an existing protected range with the specified protectedRangeId.
    """
    
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    protected_range: Optional[ProtectedRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protectedRange') }})
    
