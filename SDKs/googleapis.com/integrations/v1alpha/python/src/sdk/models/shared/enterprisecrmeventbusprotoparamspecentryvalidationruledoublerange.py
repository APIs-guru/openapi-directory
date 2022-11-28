from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange:
    r"""EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleDoubleRange
    Range used to validate doubles and floats.
    """
    
    max: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max') }})
    min: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('min') }})
    
