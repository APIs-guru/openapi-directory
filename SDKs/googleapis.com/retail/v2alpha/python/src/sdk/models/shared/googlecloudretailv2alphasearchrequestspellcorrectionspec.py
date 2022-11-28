from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpecModeEnum(str, Enum):
    MODE_UNSPECIFIED = "MODE_UNSPECIFIED"
    SUGGESTION_ONLY = "SUGGESTION_ONLY"
    AUTO = "AUTO"


@dataclass_json
@dataclass
class GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpec:
    r"""GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpec
    The specification for query spell correction.
    """
    
    mode: Optional[GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpecModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    
