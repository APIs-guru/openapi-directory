from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ShortlinkRequest:
    keyid: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyid') }})
    shortlink: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortlink') }})
    
