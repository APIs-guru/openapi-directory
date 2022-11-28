from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAppsDriveLabelsV2betaDisableLabelRequest:
    r"""GoogleAppsDriveLabelsV2betaDisableLabelRequest
    Request to deprecate a published Label.
    """
    
    disabled_policy: Optional[GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabledPolicy') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateMask') }})
    use_admin_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useAdminAccess') }})
    write_control: Optional[GoogleAppsDriveLabelsV2betaWriteControl] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writeControl') }})
    
