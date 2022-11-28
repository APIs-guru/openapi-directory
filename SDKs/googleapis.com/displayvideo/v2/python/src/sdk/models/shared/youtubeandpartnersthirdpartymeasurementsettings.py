from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class YoutubeAndPartnersThirdPartyMeasurementSettings:
    r"""YoutubeAndPartnersThirdPartyMeasurementSettings
    Settings that control what third-party vendors are measuring specific line item metrics.
    """
    
    brand_lift_vendor_configs: Optional[List[ThirdPartyVendorConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brandLiftVendorConfigs') }})
    brand_safety_vendor_configs: Optional[List[ThirdPartyVendorConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brandSafetyVendorConfigs') }})
    reach_vendor_configs: Optional[List[ThirdPartyVendorConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reachVendorConfigs') }})
    viewability_vendor_configs: Optional[List[ThirdPartyVendorConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewabilityVendorConfigs') }})
    
