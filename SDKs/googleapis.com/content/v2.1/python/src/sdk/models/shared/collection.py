from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Collection:
    r"""Collection
    The collection message.
    """
    
    custom_label0: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customLabel0') }})
    custom_label1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customLabel1') }})
    custom_label2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customLabel2') }})
    custom_label3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customLabel3') }})
    custom_label4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customLabel4') }})
    featured_product: Optional[List[CollectionFeaturedProduct]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('featuredProduct') }})
    headline: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headline') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    image_link: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageLink') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    mobile_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileLink') }})
    product_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productCountry') }})
    
