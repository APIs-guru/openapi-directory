from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PricingSchedulePricingPeriod:
    r"""PricingSchedulePricingPeriod
    Pricing Period
    """
    
    end_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pricing_comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pricingComment') }})
    rate_or_cost_nanos: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rateOrCostNanos') }})
    start_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    units: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('units') }})
    
