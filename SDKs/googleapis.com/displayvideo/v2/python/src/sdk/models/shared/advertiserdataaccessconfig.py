from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AdvertiserDataAccessConfig:
    r"""AdvertiserDataAccessConfig
    Settings that control how advertiser related data may be accessed.
    """
    
    sdf_config: Optional[AdvertiserSdfConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sdfConfig') }})
    
