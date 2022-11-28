from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TargetsPresentCondition:
    r"""TargetsPresentCondition
    TargetsPresentCondition contains information on any Targets defined in the Delivery Pipeline that do not actually exist.
    """
    
    missing_targets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('missingTargets') }})
    status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
