from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2ReidentifyContentResponse:
    r"""GooglePrivacyDlpV2ReidentifyContentResponse
    Results of re-identifying an item.
    """
    
    item: Optional[GooglePrivacyDlpV2ContentItem] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    overview: Optional[GooglePrivacyDlpV2TransformationOverview] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overview') }})
    
