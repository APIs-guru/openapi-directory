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
class PivotGroupRule:
    r"""PivotGroupRule
    An optional setting on a PivotGroup that defines buckets for the values in the source data column rather than breaking out each individual value. Only one PivotGroup with a group rule may be added for each column in the source data, though on any given column you may add both a PivotGroup that has a rule and a PivotGroup that does not.
    """
    
    date_time_rule: Optional[DateTimeRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateTimeRule') }})
    histogram_rule: Optional[HistogramRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('histogramRule') }})
    manual_rule: Optional[ManualRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manualRule') }})
    
