from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import address
from . import primaryadmin

class CustomerCustomerTypeEnum(str, Enum):
    CUSTOMER_TYPE_UNSPECIFIED = "customerTypeUnspecified"
    DOMAIN = "domain"
    TEAM = "team"


@dataclass_json
@dataclass
class Customer:
    alternate_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alternateEmail' }})
    customer_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerDomain' }})
    customer_domain_verified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerDomainVerified' }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerId' }})
    customer_type: Optional[CustomerCustomerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerType' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneNumber' }})
    postal_address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalAddress' }})
    primary_admin: Optional[primaryadmin.PrimaryAdmin] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryAdmin' }})
    resource_ui_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceUiUrl' }})
    
