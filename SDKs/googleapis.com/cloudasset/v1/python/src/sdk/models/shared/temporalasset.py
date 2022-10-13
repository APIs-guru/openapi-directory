from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import asset
from . import asset
from . import timewindow

class TemporalAssetPriorAssetStateEnum(str, Enum):
    PRIOR_ASSET_STATE_UNSPECIFIED = "PRIOR_ASSET_STATE_UNSPECIFIED"
    PRESENT = "PRESENT"
    INVALID = "INVALID"
    DOES_NOT_EXIST = "DOES_NOT_EXIST"
    DELETED = "DELETED"


@dataclass_json
@dataclass
class TemporalAsset:
    asset: Optional[asset.Asset] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset' }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    prior_asset: Optional[asset.Asset] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priorAsset' }})
    prior_asset_state: Optional[TemporalAssetPriorAssetStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priorAssetState' }})
    window: Optional[timewindow.TimeWindow] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'window' }})
    
