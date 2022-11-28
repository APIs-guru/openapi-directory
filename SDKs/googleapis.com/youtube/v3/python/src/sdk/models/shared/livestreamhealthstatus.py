from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class LiveStreamHealthStatusStatusEnum(str, Enum):
    GOOD = "good"
    OK = "ok"
    BAD = "bad"
    NO_DATA = "noData"
    REVOKED = "revoked"


@dataclass_json
@dataclass
class LiveStreamHealthStatus:
    configuration_issues: Optional[List[LiveStreamConfigurationIssue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configurationIssues') }})
    last_update_time_seconds: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdateTimeSeconds') }})
    status: Optional[LiveStreamHealthStatusStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
