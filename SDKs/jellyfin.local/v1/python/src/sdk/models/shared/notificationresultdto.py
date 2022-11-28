from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NotificationResultDto:
    r"""NotificationResultDto
    A list of notifications with the total record count for pagination.
    """
    
    notifications: Optional[List[NotificationDto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Notifications') }})
    total_record_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalRecordCount') }})
    
