from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2HybridContentItem:
    r"""GooglePrivacyDlpV2HybridContentItem
    An individual hybrid item to inspect. Will be stored temporarily during processing.
    """
    
    finding_details: Optional[GooglePrivacyDlpV2HybridFindingDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('findingDetails') }})
    item: Optional[GooglePrivacyDlpV2ContentItem] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    
