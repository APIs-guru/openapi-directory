from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDataplexV1TaskExecutionStatus:
    r"""GoogleCloudDataplexV1TaskExecutionStatus
    Status of the task execution (e.g. Jobs).
    """
    
    latest_job: Optional[GoogleCloudDataplexV1Job] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestJob') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
