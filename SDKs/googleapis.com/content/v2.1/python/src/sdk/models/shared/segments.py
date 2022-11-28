from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SegmentsProgramEnum(str, Enum):
    PROGRAM_UNSPECIFIED = "PROGRAM_UNSPECIFIED"
    SHOPPING_ADS = "SHOPPING_ADS"
    FREE_PRODUCT_LISTING = "FREE_PRODUCT_LISTING"
    FREE_LOCAL_PRODUCT_LISTING = "FREE_LOCAL_PRODUCT_LISTING"
    BUY_ON_GOOGLE_LISTING = "BUY_ON_GOOGLE_LISTING"


@dataclass_json
@dataclass
class Segments:
    r"""Segments
    Dimensions according to which metrics are segmented in the response. Values of product dimensions, such as `offer_id`, reflect the state of a product at the time of the corresponding event, for example, impression or order. Segment fields cannot be selected in queries without also selecting at least one metric field. Values are only set for dimensions requested explicitly in the request's search query.
    """
    
    brand: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brand') }})
    category_l1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryL1') }})
    category_l2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryL2') }})
    category_l3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryL3') }})
    category_l4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryL4') }})
    category_l5: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryL5') }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    custom_label0: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customLabel0') }})
    custom_label1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customLabel1') }})
    custom_label2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customLabel2') }})
    custom_label3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customLabel3') }})
    custom_label4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customLabel4') }})
    customer_country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerCountryCode') }})
    date_: Optional[Date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    offer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerId') }})
    product_type_l1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productTypeL1') }})
    product_type_l2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productTypeL2') }})
    product_type_l3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productTypeL3') }})
    product_type_l4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productTypeL4') }})
    product_type_l5: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productTypeL5') }})
    program: Optional[SegmentsProgramEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('program') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    week: Optional[Date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('week') }})
    
