from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CustomerCustomerTypeEnum(str, Enum):
    CUSTOMER_TYPE_UNSPECIFIED = "customerTypeUnspecified"
    DOMAIN = "domain"
    TEAM = "team"


@dataclass_json
@dataclass
class Customer:
    r"""Customer
    When a Google customer's account is registered with a reseller, the customer's subscriptions for Google services are managed by this reseller. A customer is described by a primary domain name and a physical address.
    """
    
    alternate_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternateEmail') }})
    customer_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerDomain') }})
    customer_domain_verified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerDomainVerified') }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerId') }})
    customer_type: Optional[CustomerCustomerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerType') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    postal_address: Optional[Address] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalAddress') }})
    primary_admin: Optional[PrimaryAdmin] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryAdmin') }})
    resource_ui_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceUiUrl') }})
    
