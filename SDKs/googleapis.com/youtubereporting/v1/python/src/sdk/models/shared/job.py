from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Job:
    r"""Job
    A job creating reports of a specific type.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireTime') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    report_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportTypeId') }})
    system_managed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('systemManaged') }})
    
