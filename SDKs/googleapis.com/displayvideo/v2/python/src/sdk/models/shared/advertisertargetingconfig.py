from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AdvertiserTargetingConfig:
    r"""AdvertiserTargetingConfig
    Targeting settings related to ad serving of an advertiser.
    """
    
    exempt_tv_from_viewability_targeting: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exemptTvFromViewabilityTargeting') }})
    
