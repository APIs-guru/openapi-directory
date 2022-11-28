from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EnterpriseCrmEventbusProtoNextTeardownTask:
    r"""EnterpriseCrmEventbusProtoNextTeardownTask
    The teardown task that is next in line to be executed. We support only sequential execution of teardown tasks (i.e. no branching).
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
