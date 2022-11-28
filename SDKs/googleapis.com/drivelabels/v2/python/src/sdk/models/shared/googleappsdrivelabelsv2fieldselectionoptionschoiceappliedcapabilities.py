from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities:
    r"""GoogleAppsDriveLabelsV2FieldSelectionOptionsChoiceAppliedCapabilities
    The capabilities related to this choice on applied metadata.
    """
    
    can_read: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canRead') }})
    can_search: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canSearch') }})
    can_select: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canSelect') }})
    
