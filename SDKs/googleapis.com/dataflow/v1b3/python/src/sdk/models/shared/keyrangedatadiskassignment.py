from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class KeyRangeDataDiskAssignment:
    r"""KeyRangeDataDiskAssignment
    Data disk assignment information for a specific key-range of a sharded computation. Currently we only support UTF-8 character splits to simplify encoding into JSON.
    """
    
    data_disk: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataDisk') }})
    end: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    
