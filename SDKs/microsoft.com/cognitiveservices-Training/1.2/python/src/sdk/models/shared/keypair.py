from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class KeyPair:
    primary_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrimaryKey') }})
    secondary_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecondaryKey') }})
    
