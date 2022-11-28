from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DisplayData:
    r"""DisplayData
    Data provided with a pipeline or transform to provide descriptive info.
    """
    
    bool_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boolValue') }})
    duration_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('durationValue') }})
    float_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floatValue') }})
    int64_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('int64Value') }})
    java_class_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('javaClassValue') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespace') }})
    short_str_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortStrValue') }})
    str_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('strValue') }})
    timestamp_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestampValue') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
