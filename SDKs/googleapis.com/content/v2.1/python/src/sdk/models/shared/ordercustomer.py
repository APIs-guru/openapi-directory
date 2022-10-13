from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import ordercustomerloyaltyinfo
from . import ordercustomermarketingrightsinfo


@dataclass_json
@dataclass
class OrderCustomer:
    full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullName' }})
    invoice_receiving_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invoiceReceivingEmail' }})
    loyalty_info: Optional[ordercustomerloyaltyinfo.OrderCustomerLoyaltyInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loyaltyInfo' }})
    marketing_rights_info: Optional[ordercustomermarketingrightsinfo.OrderCustomerMarketingRightsInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marketingRightsInfo' }})
    
