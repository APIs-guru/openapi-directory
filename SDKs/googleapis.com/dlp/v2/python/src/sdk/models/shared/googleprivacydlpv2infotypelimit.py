from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2InfoTypeLimit:
    r"""GooglePrivacyDlpV2InfoTypeLimit
    Max findings configuration per infoType, per content item or long running DlpJob.
    """
    
    info_type: Optional[GooglePrivacyDlpV2InfoType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infoType') }})
    max_findings: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxFindings') }})
    
