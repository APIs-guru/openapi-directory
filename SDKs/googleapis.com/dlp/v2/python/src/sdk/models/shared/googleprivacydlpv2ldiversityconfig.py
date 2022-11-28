from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2LDiversityConfig:
    r"""GooglePrivacyDlpV2LDiversityConfig
    l-diversity metric, used for analysis of reidentification risk.
    """
    
    quasi_ids: Optional[List[GooglePrivacyDlpV2FieldID]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quasiIds') }})
    sensitive_attribute: Optional[GooglePrivacyDlpV2FieldID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sensitiveAttribute') }})
    
