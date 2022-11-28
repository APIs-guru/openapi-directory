from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeliveryArea:
    r"""DeliveryArea
    A delivery area for the product. Only one of `countryCode` or `postalCodeRange` must be set.
    """
    
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryCode') }})
    postal_code_range: Optional[DeliveryAreaPostalCodeRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCodeRange') }})
    region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionCode') }})
    
