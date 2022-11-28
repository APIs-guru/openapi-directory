from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2CategoricalStatsConfig:
    r"""GooglePrivacyDlpV2CategoricalStatsConfig
    Compute numerical stats over an individual column, including number of distinct values and value count distribution.
    """
    
    field: Optional[GooglePrivacyDlpV2FieldID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    
