from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AdvertiserAdServerConfig:
    r"""AdvertiserAdServerConfig
    Ad server related settings of an advertiser.
    """
    
    cm_hybrid_config: Optional[CmHybridConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cmHybridConfig') }})
    third_party_only_config: Optional[ThirdPartyOnlyConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thirdPartyOnlyConfig') }})
    
