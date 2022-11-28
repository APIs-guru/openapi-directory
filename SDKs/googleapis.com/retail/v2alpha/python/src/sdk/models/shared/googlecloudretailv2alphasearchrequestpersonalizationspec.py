from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudRetailV2alphaSearchRequestPersonalizationSpecModeEnum(str, Enum):
    MODE_UNSPECIFIED = "MODE_UNSPECIFIED"
    AUTO = "AUTO"
    DISABLED = "DISABLED"


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec:
    r"""GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec
    The specification for personalization.
    """
    
    mode: Optional[GoogleCloudRetailV2alphaSearchRequestPersonalizationSpecModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    
