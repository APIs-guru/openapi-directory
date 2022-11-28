from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudRetailV2betaSearchRequestPersonalizationSpecModeEnum(str, Enum):
    MODE_UNSPECIFIED = "MODE_UNSPECIFIED"
    AUTO = "AUTO"
    DISABLED = "DISABLED"


@dataclass_json
@dataclass
class GoogleCloudRetailV2betaSearchRequestPersonalizationSpec:
    r"""GoogleCloudRetailV2betaSearchRequestPersonalizationSpec
    The specification for personalization.
    """
    
    mode: Optional[GoogleCloudRetailV2betaSearchRequestPersonalizationSpecModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    
