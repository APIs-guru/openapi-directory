from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BillAbstract:
    abstract: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('abstract') }})
    note: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    
