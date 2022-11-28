from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BusinessDefaultsInputModel:
    auto_update_customer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoUpdateCustomer') }})
    business_notification: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessNotification') }})
    customer_city: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerCity') }})
    customer_state: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerState') }})
    email_info: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailInfo') }})
    enable_utc_timezone: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableUtcTimezone') }})
    
