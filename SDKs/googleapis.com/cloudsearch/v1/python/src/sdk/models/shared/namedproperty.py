from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NamedProperty:
    r"""NamedProperty
    A typed name-value pair for structured data. The type of the value should be the same as the registered type for the `name` property in the object definition of `objectType`.
    """
    
    boolean_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('booleanValue') }})
    date_values: Optional[DateValues] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateValues') }})
    double_values: Optional[DoubleValues] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doubleValues') }})
    enum_values: Optional[EnumValues] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enumValues') }})
    html_values: Optional[HTMLValues] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('htmlValues') }})
    integer_values: Optional[IntegerValues] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integerValues') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    object_values: Optional[ObjectValues] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectValues') }})
    text_values: Optional[TextValues] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textValues') }})
    timestamp_values: Optional[TimestampValues] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestampValues') }})
    
