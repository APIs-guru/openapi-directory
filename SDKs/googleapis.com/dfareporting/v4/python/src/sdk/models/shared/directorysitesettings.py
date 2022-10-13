from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import dfpsettings


@dataclass_json
@dataclass
class DirectorySiteSettings:
    active_view_opt_out: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeViewOptOut' }})
    dfp_settings: Optional[dfpsettings.DfpSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dfpSettings' }})
    instream_video_placement_accepted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instreamVideoPlacementAccepted' }})
    interstitial_placement_accepted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interstitialPlacementAccepted' }})
    
