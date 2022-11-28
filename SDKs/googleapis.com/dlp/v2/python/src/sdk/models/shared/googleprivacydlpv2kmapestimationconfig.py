from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2KMapEstimationConfig:
    r"""GooglePrivacyDlpV2KMapEstimationConfig
    Reidentifiability metric. This corresponds to a risk model similar to what is called \"journalist risk\" in the literature, except the attack dataset is statistically modeled instead of being perfectly known. This can be done using publicly available data (like the US Census), or using a custom statistical model (indicated as one or several BigQuery tables), or by extrapolating from the distribution of values in the input dataset.
    """
    
    auxiliary_tables: Optional[List[GooglePrivacyDlpV2AuxiliaryTable]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auxiliaryTables') }})
    quasi_ids: Optional[List[GooglePrivacyDlpV2TaggedField]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quasiIds') }})
    region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionCode') }})
    
