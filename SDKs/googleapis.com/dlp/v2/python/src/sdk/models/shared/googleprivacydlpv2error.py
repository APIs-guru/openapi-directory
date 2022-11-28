from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2Error:
    r"""GooglePrivacyDlpV2Error
    Details information about an error encountered during job execution or the results of an unsuccessful activation of the JobTrigger.
    """
    
    details: Optional[GoogleRPCStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    timestamps: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamps') }})
    
