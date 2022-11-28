from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AdvertiserSdfConfig:
    r"""AdvertiserSdfConfig
    Structured Data Files (SDF) settings of an advertiser.
    """
    
    override_partner_sdf_config: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overridePartnerSdfConfig') }})
    sdf_config: Optional[SdfConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sdfConfig') }})
    
