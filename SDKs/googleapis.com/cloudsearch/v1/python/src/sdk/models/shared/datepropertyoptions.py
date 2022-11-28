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
class DatePropertyOptions:
    r"""DatePropertyOptions
    The options for date properties.
    """
    
    operator_options: Optional[DateOperatorOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatorOptions') }})
    
