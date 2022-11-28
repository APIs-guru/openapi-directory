from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TemporalAssetPriorAssetStateEnum(str, Enum):
    PRIOR_ASSET_STATE_UNSPECIFIED = "PRIOR_ASSET_STATE_UNSPECIFIED"
    PRESENT = "PRESENT"
    INVALID = "INVALID"
    DOES_NOT_EXIST = "DOES_NOT_EXIST"
    DELETED = "DELETED"


@dataclass_json
@dataclass
class TemporalAsset:
    r"""TemporalAsset
    An asset in Google Cloud and its temporal metadata, including the time window when it was observed and its status during that window.
    """
    
    asset: Optional[Asset] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asset') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    prior_asset: Optional[Asset] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priorAsset') }})
    prior_asset_state: Optional[TemporalAssetPriorAssetStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priorAssetState') }})
    window: Optional[TimeWindow] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('window') }})
    
