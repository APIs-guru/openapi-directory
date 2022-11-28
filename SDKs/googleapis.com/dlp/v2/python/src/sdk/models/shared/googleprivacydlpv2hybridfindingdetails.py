from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2HybridFindingDetails:
    r"""GooglePrivacyDlpV2HybridFindingDetails
    Populate to associate additional data with each finding.
    """
    
    container_details: Optional[GooglePrivacyDlpV2Container] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerDetails') }})
    file_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileOffset') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    row_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowOffset') }})
    table_options: Optional[GooglePrivacyDlpV2TableOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableOptions') }})
    
