from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex:
    r"""EnterpriseCrmEventbusProtoParamSpecEntryValidationRuleStringRegex
    Rule used to validate strings.
    """
    
    exclusive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclusive') }})
    regex: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regex') }})
    
