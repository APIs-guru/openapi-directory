from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TemporalAsset:
    r"""TemporalAsset
    An asset in Google Cloud and its temporal metadata, including the time window when it was observed and its status during that window.
    """
    
    asset: Optional[Asset] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asset') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    window: Optional[TimeWindow] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('window') }})
    
