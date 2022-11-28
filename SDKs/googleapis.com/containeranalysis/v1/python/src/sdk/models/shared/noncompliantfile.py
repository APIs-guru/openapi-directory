from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NonCompliantFile:
    r"""NonCompliantFile
    Details about files that caused a compliance check to fail. display_command is a single command that can be used to display a list of non compliant files. When there is no such command, we can also iterate a list of non compliant file using 'path'.
    """
    
    display_command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayCommand') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    
