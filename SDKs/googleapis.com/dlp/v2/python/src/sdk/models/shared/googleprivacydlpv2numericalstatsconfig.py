from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2NumericalStatsConfig:
    r"""GooglePrivacyDlpV2NumericalStatsConfig
    Compute numerical stats over an individual column, including min, max, and quantiles.
    """
    
    field: Optional[GooglePrivacyDlpV2FieldID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    
