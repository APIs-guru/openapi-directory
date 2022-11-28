from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2DeltaPresenceEstimationConfig:
    r"""GooglePrivacyDlpV2DeltaPresenceEstimationConfig
    δ-presence metric, used to estimate how likely it is for an attacker to figure out that one given individual appears in a de-identified dataset. Similarly to the k-map metric, we cannot compute δ-presence exactly without knowing the attack dataset, so we use a statistical model instead.
    """
    
    auxiliary_tables: Optional[List[GooglePrivacyDlpV2StatisticalTable]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auxiliaryTables') }})
    quasi_ids: Optional[List[GooglePrivacyDlpV2QuasiID]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quasiIds') }})
    region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionCode') }})
    
