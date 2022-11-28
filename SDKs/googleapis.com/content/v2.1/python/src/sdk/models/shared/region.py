from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RegionInput:
    r"""RegionInput
    Represents a geographic region that you can use as a target with both the `RegionalInventory` and `ShippingSettings` services. You can define regions as collections of either postal codes or, in some countries, using predefined geotargets.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    geotarget_area: Optional[RegionGeoTargetArea] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geotargetArea') }})
    postal_code_area: Optional[RegionPostalCodeArea] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCodeArea') }})
    

@dataclass_json
@dataclass
class Region:
    r"""Region
    Represents a geographic region that you can use as a target with both the `RegionalInventory` and `ShippingSettings` services. You can define regions as collections of either postal codes or, in some countries, using predefined geotargets.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    geotarget_area: Optional[RegionGeoTargetArea] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geotargetArea') }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantId') }})
    postal_code_area: Optional[RegionPostalCodeArea] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCodeArea') }})
    region_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionId') }})
    regional_inventory_eligible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionalInventoryEligible') }})
    shipping_eligible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingEligible') }})
    
