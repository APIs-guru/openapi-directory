from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import regiongeotargetarea
from . import regionpostalcodearea


@dataclass_json
@dataclass
class Region:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    geotarget_area: Optional[regiongeotargetarea.RegionGeoTargetArea] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geotargetArea' }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantId' }})
    postal_code_area: Optional[regionpostalcodearea.RegionPostalCodeArea] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalCodeArea' }})
    region_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionId' }})
    regional_inventory_eligible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionalInventoryEligible' }})
    shipping_eligible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingEligible' }})
    
