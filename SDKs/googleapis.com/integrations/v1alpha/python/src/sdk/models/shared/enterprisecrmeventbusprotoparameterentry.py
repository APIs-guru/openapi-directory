from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoParameterEntry:
    r"""EnterpriseCrmEventbusProtoParameterEntry
    Key-value pair of EventBus parameters.
    """
    
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: Optional[EnterpriseCrmEventbusProtoParameterValueType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
