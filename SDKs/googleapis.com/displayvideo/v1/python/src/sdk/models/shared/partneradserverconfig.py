from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PartnerAdServerConfig:
    r"""PartnerAdServerConfig
    Ad server related settings of a partner.
    """
    
    measurement_config: Optional[MeasurementConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('measurementConfig') }})
    
