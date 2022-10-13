from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BusinessDefaultsUpdateModel:
    auto_update_customer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoUpdateCustomer' }})
    business_notification: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'businessNotification' }})
    customer_city: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerCity' }})
    customer_state: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerState' }})
    email_info: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailInfo' }})
    enable_utc_timezone: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableUtcTimezone' }})
    
