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
class GoogleCloudPolicysimulatorV1beta1ReplayResult:
    r"""GoogleCloudPolicysimulatorV1beta1ReplayResult
    The result of replaying a single access tuple against a simulated state.
    """
    
    access_tuple: Optional[GoogleCloudPolicysimulatorV1beta1AccessTuple] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessTuple') }})
    diff: Optional[GoogleCloudPolicysimulatorV1beta1ReplayDiff] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diff') }})
    error: Optional[GoogleRPCStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    last_seen_date: Optional[GoogleTypeDate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastSeenDate') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    
