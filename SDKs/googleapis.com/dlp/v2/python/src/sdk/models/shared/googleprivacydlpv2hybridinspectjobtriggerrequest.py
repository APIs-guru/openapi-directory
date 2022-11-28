from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2HybridInspectJobTriggerRequest:
    r"""GooglePrivacyDlpV2HybridInspectJobTriggerRequest
    Request to search for potentially sensitive info in a custom location.
    """
    
    hybrid_item: Optional[GooglePrivacyDlpV2HybridContentItem] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hybridItem') }})
    
