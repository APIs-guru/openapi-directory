from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import datevalues
from . import doublevalues
from . import enumvalues
from . import htmlvalues
from . import integervalues
from . import objectvalues
from . import textvalues
from . import timestampvalues


@dataclass_json
@dataclass
class NamedProperty:
    boolean_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'booleanValue' }})
    date_values: Optional[datevalues.DateValues] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateValues' }})
    double_values: Optional[doublevalues.DoubleValues] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doubleValues' }})
    enum_values: Optional[enumvalues.EnumValues] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enumValues' }})
    html_values: Optional[htmlvalues.HTMLValues] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'htmlValues' }})
    integer_values: Optional[integervalues.IntegerValues] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integerValues' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    object_values: Optional[objectvalues.ObjectValues] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectValues' }})
    text_values: Optional[textvalues.TextValues] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textValues' }})
    timestamp_values: Optional[timestampvalues.TimestampValues] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestampValues' }})
    
