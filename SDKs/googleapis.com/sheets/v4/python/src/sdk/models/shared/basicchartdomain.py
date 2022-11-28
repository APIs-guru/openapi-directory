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
class BasicChartDomain:
    r"""BasicChartDomain
    The domain of a chart. For example, if charting stock prices over time, this would be the date.
    """
    
    domain: Optional[ChartData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    reversed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reversed') }})
    
