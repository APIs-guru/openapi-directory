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
class GoogleCloudPolicysimulatorV1ReplayResultsSummary:
    r"""GoogleCloudPolicysimulatorV1ReplayResultsSummary
    Summary statistics about the replayed log entries.
    """
    
    difference_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('differenceCount') }})
    error_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCount') }})
    log_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logCount') }})
    newest_date: Optional[GoogleTypeDate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newestDate') }})
    oldest_date: Optional[GoogleTypeDate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oldestDate') }})
    unchanged_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unchangedCount') }})
    
