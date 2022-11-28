from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaPublishLabelRequest:
    r"""GoogleAppsDriveLabelsV2betaPublishLabelRequest
    Request to publish a label.
    """
    
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    use_admin_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useAdminAccess') }})
    write_control: Optional[GoogleAppsDriveLabelsV2betaWriteControl] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writeControl') }})
    
