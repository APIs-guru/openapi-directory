from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2ImageTransformation:
    r"""GooglePrivacyDlpV2ImageTransformation
    Configuration for determining how redaction of images should occur.
    """
    
    all_info_types: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allInfoTypes') }})
    all_text: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allText') }})
    redaction_color: Optional[GooglePrivacyDlpV2Color] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redactionColor') }})
    selected_info_types: Optional[GooglePrivacyDlpV2SelectedInfoTypes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selectedInfoTypes') }})
    
