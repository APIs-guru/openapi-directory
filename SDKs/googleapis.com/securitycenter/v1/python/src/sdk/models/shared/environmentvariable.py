from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EnvironmentVariable:
    r"""EnvironmentVariable
    EnvironmentVariable is a name-value pair to store environment variables for Process.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    val: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('val') }})
    
