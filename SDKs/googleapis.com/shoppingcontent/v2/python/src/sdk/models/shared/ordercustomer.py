from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import ordercustomermarketingrightsinfo


@dataclass_json
@dataclass
class OrderCustomer:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    explicit_marketing_preference: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'explicitMarketingPreference' }})
    full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullName' }})
    invoice_receiving_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invoiceReceivingEmail' }})
    marketing_rights_info: Optional[ordercustomermarketingrightsinfo.OrderCustomerMarketingRightsInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marketingRightsInfo' }})
    
