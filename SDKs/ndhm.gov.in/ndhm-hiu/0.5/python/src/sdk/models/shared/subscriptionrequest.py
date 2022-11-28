from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SubscriptionRequestSubscription:
    categories: List[SubscriptionCategoryEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('categories') }})
    hiu: OrganizationRepresentation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiu') }})
    patient: ConsentManagerPatientID = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('patient') }})
    period: SubscriptionPeriod = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    purpose: UsePurpose = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('purpose') }})
    hips: Optional[List[OrganizationRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hips') }})
    

@dataclass_json
@dataclass
class SubscriptionRequest:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    subscription: SubscriptionRequestSubscription = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscription') }})
    timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
