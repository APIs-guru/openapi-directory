from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MetricUpdate:
    r"""MetricUpdate
    Describes the state of a metric.
    """
    
    cumulative: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cumulative') }})
    distribution: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distribution') }})
    gauge: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gauge') }})
    internal: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internal') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    mean_count: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meanCount') }})
    mean_sum: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meanSum') }})
    name: Optional[MetricStructuredName] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    scalar: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scalar') }})
    set: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('set') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
