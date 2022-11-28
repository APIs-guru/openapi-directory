from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OrderCustomer:
    full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullName') }})
    invoice_receiving_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceReceivingEmail') }})
    loyalty_info: Optional[OrderCustomerLoyaltyInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('loyaltyInfo') }})
    marketing_rights_info: Optional[OrderCustomerMarketingRightsInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketingRightsInfo') }})
    
