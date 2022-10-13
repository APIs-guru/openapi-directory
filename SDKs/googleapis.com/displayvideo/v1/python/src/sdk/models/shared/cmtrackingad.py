from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CmTrackingAd:
    cm_ad_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cmAdId' }})
    cm_creative_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cmCreativeId' }})
    cm_placement_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cmPlacementId' }})
    
