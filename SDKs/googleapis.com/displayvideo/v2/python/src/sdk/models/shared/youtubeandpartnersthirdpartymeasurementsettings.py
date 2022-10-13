from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import thirdpartyvendorconfig
from . import thirdpartyvendorconfig
from . import thirdpartyvendorconfig
from . import thirdpartyvendorconfig


@dataclass_json
@dataclass
class YoutubeAndPartnersThirdPartyMeasurementSettings:
    brand_lift_vendor_configs: Optional[List[thirdpartyvendorconfig.ThirdPartyVendorConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brandLiftVendorConfigs' }})
    brand_safety_vendor_configs: Optional[List[thirdpartyvendorconfig.ThirdPartyVendorConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brandSafetyVendorConfigs' }})
    reach_vendor_configs: Optional[List[thirdpartyvendorconfig.ThirdPartyVendorConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reachVendorConfigs' }})
    viewability_vendor_configs: Optional[List[thirdpartyvendorconfig.ThirdPartyVendorConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viewabilityVendorConfigs' }})
    
