from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GooglePrivacyDlpV2TableLocation:
    r"""GooglePrivacyDlpV2TableLocation
    Location of a finding within a table.
    """
    
    row_index: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowIndex') }})
    
