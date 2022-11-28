from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CmTrackingAd:
    r"""CmTrackingAd
    A Campaign Manager 360 tracking ad.
    """
    
    cm_ad_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cmAdId') }})
    cm_creative_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cmCreativeId') }})
    cm_placement_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cmPlacementId') }})
    
