from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ObRisk1DeliveryAddress:
    r"""ObRisk1DeliveryAddress
    Information that locates and identifies a specific address, as defined by postal services or in free format text.
    """
    
    country: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Country') }})
    town_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TownName') }})
    address_line: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddressLine') }})
    building_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BuildingNumber') }})
    country_sub_division: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CountrySubDivision') }})
    post_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PostCode') }})
    street_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreetName') }})
    
class ObRisk1PaymentContextCodeEnum(str, Enum):
    BILL_PAYMENT = "BillPayment"
    ECOMMERCE_GOODS = "EcommerceGoods"
    ECOMMERCE_SERVICES = "EcommerceServices"
    OTHER = "Other"
    PARTY_TO_PARTY = "PartyToParty"


@dataclass_json
@dataclass
class ObRisk1:
    r"""ObRisk1
    The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.
    """
    
    delivery_address: Optional[ObRisk1DeliveryAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeliveryAddress') }})
    merchant_category_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MerchantCategoryCode') }})
    merchant_customer_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MerchantCustomerIdentification') }})
    payment_context_code: Optional[ObRisk1PaymentContextCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentContextCode') }})
    
