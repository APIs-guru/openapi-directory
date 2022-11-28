from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OrderCustomer:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    explicit_marketing_preference: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explicitMarketingPreference') }})
    full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullName') }})
    invoice_receiving_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceReceivingEmail') }})
    marketing_rights_info: Optional[OrderCustomerMarketingRightsInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketingRightsInfo') }})
    
