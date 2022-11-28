from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2NumericalStatsResult:
    r"""GooglePrivacyDlpV2NumericalStatsResult
    Result of the numerical stats computation.
    """
    
    max_value: Optional[GooglePrivacyDlpV2Value] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxValue') }})
    min_value: Optional[GooglePrivacyDlpV2Value] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minValue') }})
    quantile_values: Optional[List[GooglePrivacyDlpV2Value]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantileValues') }})
    
