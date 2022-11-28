from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OperationDNSKeyContext:
    new_value: Optional[DNSKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newValue') }})
    old_value: Optional[DNSKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oldValue') }})
    
