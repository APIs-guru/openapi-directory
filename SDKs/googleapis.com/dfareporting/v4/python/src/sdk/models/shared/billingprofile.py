from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class BillingProfileInvoiceLevelEnum(str, Enum):
    ACCOUNT_LEVEL = "ACCOUNT_LEVEL"
    ADVERTISER_LEVEL = "ADVERTISER_LEVEL"
    CAMPAIGN_LEVEL = "CAMPAIGN_LEVEL"

class BillingProfileStatusEnum(str, Enum):
    UNDER_REVIEW = "UNDER_REVIEW"
    ACTIVE = "ACTIVE"
    ARCHIVED = "ARCHIVED"


@dataclass_json
@dataclass
class BillingProfile:
    consolidated_invoice: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consolidatedInvoice' }})
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countryCode' }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    invoice_level: Optional[BillingProfileInvoiceLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invoiceLevel' }})
    is_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDefault' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    payments_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentsAccountId' }})
    payments_customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentsCustomerId' }})
    purchase_order: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchaseOrder' }})
    secondary_payments_customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondaryPaymentsCustomerId' }})
    status: Optional[BillingProfileStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
