from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DirectorySiteSettings:
    r"""DirectorySiteSettings
    Directory Site Settings
    """
    
    active_view_opt_out: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeViewOptOut') }})
    dfp_settings: Optional[DfpSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dfpSettings') }})
    instream_video_placement_accepted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instreamVideoPlacementAccepted') }})
    interstitial_placement_accepted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interstitialPlacementAccepted') }})
    
