from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GooglePrivacyDlpV2ConditionOperatorEnum(str, Enum):
    RELATIONAL_OPERATOR_UNSPECIFIED = "RELATIONAL_OPERATOR_UNSPECIFIED"
    EQUAL_TO = "EQUAL_TO"
    NOT_EQUAL_TO = "NOT_EQUAL_TO"
    GREATER_THAN = "GREATER_THAN"
    LESS_THAN = "LESS_THAN"
    GREATER_THAN_OR_EQUALS = "GREATER_THAN_OR_EQUALS"
    LESS_THAN_OR_EQUALS = "LESS_THAN_OR_EQUALS"
    EXISTS = "EXISTS"


@dataclass_json
@dataclass
class GooglePrivacyDlpV2Condition:
    r"""GooglePrivacyDlpV2Condition
    The field type of `value` and `field` do not need to match to be considered equal, but not all comparisons are possible. EQUAL_TO and NOT_EQUAL_TO attempt to compare even with incompatible types, but all other comparisons are invalid with incompatible types. A `value` of type: - `string` can be compared against all other types - `boolean` can only be compared against other booleans - `integer` can be compared against doubles or a string if the string value can be parsed as an integer. - `double` can be compared against integers or a string if the string can be parsed as a double. - `Timestamp` can be compared against strings in RFC 3339 date string format. - `TimeOfDay` can be compared against timestamps and strings in the format of 'HH:mm:ss'. If we fail to compare do to type mismatch, a warning will be given and the condition will evaluate to false.
    """
    
    field: Optional[GooglePrivacyDlpV2FieldID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    operator: Optional[GooglePrivacyDlpV2ConditionOperatorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    value: Optional[GooglePrivacyDlpV2Value] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
