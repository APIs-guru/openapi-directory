from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AdvertiserTargetingConfig:
    exempt_tv_from_viewability_targeting: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exemptTvFromViewabilityTargeting' }})
    
