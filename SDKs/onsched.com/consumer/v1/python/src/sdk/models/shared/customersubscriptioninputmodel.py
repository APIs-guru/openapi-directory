from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CustomerSubscriptionInputModel:
    customer_plan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerPlanId' }})
    plan_start: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'planStart', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    trial_period_end: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trialPeriodEnd', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
