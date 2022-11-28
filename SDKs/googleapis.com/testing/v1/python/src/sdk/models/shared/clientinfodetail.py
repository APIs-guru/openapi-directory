from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ClientInfoDetail:
    r"""ClientInfoDetail
    Key-value pair of detailed information about the client which invoked the test. Examples: {'Version', '1.0'}, {'Release Track', 'BETA'}.
    """
    
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
