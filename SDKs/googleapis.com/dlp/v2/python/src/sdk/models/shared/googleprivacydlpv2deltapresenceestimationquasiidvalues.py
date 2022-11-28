from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIDValues:
    r"""GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIDValues
    A tuple of values for the quasi-identifier columns.
    """
    
    estimated_probability: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('estimatedProbability') }})
    quasi_ids_values: Optional[List[GooglePrivacyDlpV2Value]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quasiIdsValues') }})
    
