from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2InfoTypeStats:
    r"""GooglePrivacyDlpV2InfoTypeStats
    Statistics regarding a specific InfoType.
    """
    
    count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    info_type: Optional[GooglePrivacyDlpV2InfoType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infoType') }})
    
