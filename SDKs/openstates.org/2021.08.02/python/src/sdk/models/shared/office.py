from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Office:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    fax: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fax') }})
    voice: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice') }})
    
