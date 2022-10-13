from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import date
from . import date

class SegmentsProgramEnum(str, Enum):
    PROGRAM_UNSPECIFIED = "PROGRAM_UNSPECIFIED"
    SHOPPING_ADS = "SHOPPING_ADS"
    FREE_PRODUCT_LISTING = "FREE_PRODUCT_LISTING"
    FREE_LOCAL_PRODUCT_LISTING = "FREE_LOCAL_PRODUCT_LISTING"
    BUY_ON_GOOGLE_LISTING = "BUY_ON_GOOGLE_LISTING"


@dataclass_json
@dataclass
class Segments:
    brand: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brand' }})
    category_l1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryL1' }})
    category_l2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryL2' }})
    category_l3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryL3' }})
    category_l4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryL4' }})
    category_l5: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryL5' }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    custom_label0: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customLabel0' }})
    custom_label1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customLabel1' }})
    custom_label2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customLabel2' }})
    custom_label3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customLabel3' }})
    custom_label4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customLabel4' }})
    customer_country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerCountryCode' }})
    date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    offer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offerId' }})
    product_type_l1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productTypeL1' }})
    product_type_l2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productTypeL2' }})
    product_type_l3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productTypeL3' }})
    product_type_l4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productTypeL4' }})
    product_type_l5: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productTypeL5' }})
    program: Optional[SegmentsProgramEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'program' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    week: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'week' }})
    
