from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2ImageRedactionConfig:
    r"""GooglePrivacyDlpV2ImageRedactionConfig
    Configuration for determining how redaction of images should occur.
    """
    
    info_type: Optional[GooglePrivacyDlpV2InfoType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('infoType') }})
    redact_all_text: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redactAllText') }})
    redaction_color: Optional[GooglePrivacyDlpV2Color] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redactionColor') }})
    
