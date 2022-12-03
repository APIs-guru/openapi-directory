from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CoverageValueReadV1InputTypeEnum(str, Enum):
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

class CoverageValueReadV1RequiredForEnum(str, Enum):
    QUOTE = "quote"
    BIND = "bind"
    NULL = "null"


@dataclass_json
@dataclass
class CoverageValueReadV1:
    r"""CoverageValueReadV1
    Coverage values assign specific values to coverage parameters.
    """
    
    affects_conditions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('affects_conditions') }})
    child_coverage_values: Optional[list[CoverageValueReadV1]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('child_coverage_values') }})
    coverage_parameter_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coverage_parameter_id') }})
    creates_array: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creates_array') }})
    input_type: Optional[CoverageValueReadV1InputTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('input_type') }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    parameter_text: Optional[ParameterTextV1] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameter_text') }})
    relevant_products: Optional[list[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relevant_products') }})
    required_for: Optional[list[CoverageValueReadV1RequiredForEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_for') }})
    schema: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    value: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
