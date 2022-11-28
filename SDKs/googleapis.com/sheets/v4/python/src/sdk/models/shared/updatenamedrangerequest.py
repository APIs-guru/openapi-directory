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
class UpdateNamedRangeRequest:
    r"""UpdateNamedRangeRequest
    Updates properties of the named range with the specified namedRangeId.
    """
    
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    named_range: Optional[NamedRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namedRange') }})
    
