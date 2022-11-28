from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AltIdentifier:
    identifier: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    scheme: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheme') }})
    
