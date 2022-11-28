from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2FindingLimits:
    r"""GooglePrivacyDlpV2FindingLimits
    Configuration to control the number of findings returned for inspection. This is not used for de-identification or data profiling. When redacting sensitive data from images, finding limits don't apply. They can cause unexpected or inconsistent results, where only some data is redacted. Don't include finding limits in RedactImage requests. Otherwise, Cloud DLP returns an error.
    """
    
    max_findings_per_info_type: Optional[List[GooglePrivacyDlpV2InfoTypeLimit]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxFindingsPerInfoType') }})
    max_findings_per_item: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxFindingsPerItem') }})
    max_findings_per_request: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxFindingsPerRequest') }})
    
