from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import subscriptioncategory_enum
from . import organizationrepresentation
from . import organizationrepresentation
from . import consentmanagerpatientid
from . import subscriptionperiod
from . import usepurpose


@dataclass_json
@dataclass
class SubscriptionRequestSubscription:
    categories: List[subscriptioncategory_enum.SubscriptionCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    hips: Optional[List[organizationrepresentation.OrganizationRepresentation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hips' }})
    hiu: organizationrepresentation.OrganizationRepresentation = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hiu' }})
    patient: consentmanagerpatientid.ConsentManagerPatientID = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patient' }})
    period: subscriptionperiod.SubscriptionPeriod = field(default=None, metadata={'dataclasses_json': { 'field_name': 'period' }})
    purpose: usepurpose.UsePurpose = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purpose' }})
    

@dataclass_json
@dataclass
class SubscriptionRequest:
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    subscription: SubscriptionRequestSubscription = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscription' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
