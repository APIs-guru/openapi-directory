from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""BillingProfile
    Contains properties of a Campaign Manager Billing Profile.
    """
    
    consolidated_invoice: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consolidatedInvoice') }})
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryCode') }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    invoice_level: Optional[BillingProfileInvoiceLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceLevel') }})
    is_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDefault') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    payments_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentsAccountId') }})
    payments_customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentsCustomerId') }})
    purchase_order: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchaseOrder') }})
    secondary_payments_customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondaryPaymentsCustomerId') }})
    status: Optional[BillingProfileStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
