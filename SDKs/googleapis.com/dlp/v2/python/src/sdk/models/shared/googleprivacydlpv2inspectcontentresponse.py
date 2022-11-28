from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2InspectContentResponse:
    r"""GooglePrivacyDlpV2InspectContentResponse
    Results of inspecting an item.
    """
    
    result: Optional[GooglePrivacyDlpV2InspectResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    
