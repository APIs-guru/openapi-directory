from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ObRisk1DeliveryAddress:
    address_line: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AddressLine' }})
    building_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BuildingNumber' }})
    country: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Country' }})
    country_sub_division: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CountrySubDivision' }})
    post_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PostCode' }})
    street_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreetName' }})
    town_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TownName' }})
    
class ObRisk1PaymentContextCodeEnum(str, Enum):
    BILL_PAYMENT = "BillPayment"
    ECOMMERCE_GOODS = "EcommerceGoods"
    ECOMMERCE_SERVICES = "EcommerceServices"
    OTHER = "Other"
    PARTY_TO_PARTY = "PartyToParty"


@dataclass_json
@dataclass
class ObRisk1:
    delivery_address: Optional[ObRisk1DeliveryAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeliveryAddress' }})
    merchant_category_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MerchantCategoryCode' }})
    merchant_customer_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MerchantCustomerIdentification' }})
    payment_context_code: Optional[ObRisk1PaymentContextCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaymentContextCode' }})
    
