from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2InspectResult:
    r"""GooglePrivacyDlpV2InspectResult
    All the findings for a single scanned item.
    """
    
    findings: Optional[List[GooglePrivacyDlpV2Finding]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findings') }})
    findings_truncated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingsTruncated') }})
    
