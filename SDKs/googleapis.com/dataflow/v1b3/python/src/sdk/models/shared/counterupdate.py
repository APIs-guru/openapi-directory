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
class CounterUpdate:
    r"""CounterUpdate
    An update to a Counter sent from a worker.
    """
    
    boolean: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boolean') }})
    cumulative: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cumulative') }})
    distribution: Optional[DistributionUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distribution') }})
    floating_point: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floatingPoint') }})
    floating_point_list: Optional[FloatingPointList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floatingPointList') }})
    floating_point_mean: Optional[FloatingPointMean] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floatingPointMean') }})
    integer: Optional[SplitInt64] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integer') }})
    integer_gauge: Optional[IntegerGauge] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integerGauge') }})
    integer_list: Optional[IntegerList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integerList') }})
    integer_mean: Optional[IntegerMean] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integerMean') }})
    internal: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internal') }})
    name_and_kind: Optional[NameAndKind] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nameAndKind') }})
    short_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortId') }})
    string_list: Optional[StringList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringList') }})
    structured_name_and_metadata: Optional[CounterStructuredNameAndMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('structuredNameAndMetadata') }})
    
