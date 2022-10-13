from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import datetimerule
from . import histogramrule
from . import manualrule


@dataclass_json
@dataclass
class PivotGroupRule:
    date_time_rule: Optional[datetimerule.DateTimeRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateTimeRule' }})
    histogram_rule: Optional[histogramrule.HistogramRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'histogramRule' }})
    manual_rule: Optional[manualrule.ManualRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manualRule' }})
    
