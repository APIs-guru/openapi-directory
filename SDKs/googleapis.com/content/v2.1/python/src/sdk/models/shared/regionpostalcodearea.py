from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RegionPostalCodeArea:
    r"""RegionPostalCodeArea
    A list of postal codes that defines the region area. Note: All regions defined using postal codes are accessible via the account's `ShippingSettings.postalCodeGroups` resource.
    """
    
    postal_codes: Optional[List[RegionPostalCodeAreaPostalCodeRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCodes') }})
    region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionCode') }})
    
