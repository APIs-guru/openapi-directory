from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RiskValueReadV1ConditionalOn:
    r"""RiskValueReadV1ConditionalOn
    Array of risk parameters that triggered this question. Only returned by /applications endpoint.
    """
    
    risk_parameter_id: Optional[list[list[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('risk_parameter_id') }})
    
class RiskValueReadV1InputTypeEnum(str, Enum):
    DATE = "date"
    NUMBER = "number"
    INTEGER = "integer"
    SELECT_ONE = "select_one"
    SELECT_MANY = "select_many"
    ADDRESS = "address"
    CLAIM_EVENT = "claim_event"
    EMAIL = "email"
    PHONE = "phone"
    YEAR = "year"
    SHORT_TEXT = "short_text"
    LONG_TEXT = "long_text"
    WEBSITE = "website"
    FILE = "file"

class RiskValueReadV1RequiredForEnum(str, Enum):
    QUOTE = "quote"
    BIND = "bind"
    NULL = "null"


@dataclass_json
@dataclass
class RiskValueReadV1:
    r"""RiskValueReadV1
    Risk values assign specific values to risk parameters.
    """
    
    affects_conditions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('affects_conditions') }})
    child_risk_values: Optional[list[RiskValueReadV1]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('child_risk_values') }})
    conditional_on: Optional[RiskValueReadV1ConditionalOn] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditional_on') }})
    creates_array: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creates_array') }})
    input_type: Optional[RiskValueReadV1InputTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('input_type') }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    parameter_text: Optional[ParameterTextV1] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameter_text') }})
    relevant_products: Optional[list[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relevant_products') }})
    required_for: Optional[list[RiskValueReadV1RequiredForEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_for') }})
    risk_parameter_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('risk_parameter_id') }})
    schema: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    value: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
