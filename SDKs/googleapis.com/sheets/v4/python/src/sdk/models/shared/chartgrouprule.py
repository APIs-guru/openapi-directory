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
class ChartGroupRule:
    r"""ChartGroupRule
    An optional setting on the ChartData of the domain of a data source chart that defines buckets for the values in the domain rather than breaking out each individual value. For example, when plotting a data source chart, you can specify a histogram rule on the domain (it should only contain numeric values), grouping its values into buckets. Any values of a chart series that fall into the same bucket are aggregated based on the aggregate_type.
    """
    
    date_time_rule: Optional[ChartDateTimeRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateTimeRule') }})
    histogram_rule: Optional[ChartHistogramRule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('histogramRule') }})
    
