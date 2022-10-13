from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import chartdatetimerule
from . import charthistogramrule


@dataclass_json
@dataclass
class ChartGroupRule:
    date_time_rule: Optional[chartdatetimerule.ChartDateTimeRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateTimeRule' }})
    histogram_rule: Optional[charthistogramrule.ChartHistogramRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'histogramRule' }})
    
