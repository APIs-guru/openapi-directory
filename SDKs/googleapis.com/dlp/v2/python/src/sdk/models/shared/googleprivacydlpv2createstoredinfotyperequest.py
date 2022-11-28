from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GooglePrivacyDlpV2CreateStoredInfoTypeRequest:
    r"""GooglePrivacyDlpV2CreateStoredInfoTypeRequest
    Request message for CreateStoredInfoType.
    """
    
    config: Optional[GooglePrivacyDlpV2StoredInfoTypeConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    stored_info_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('storedInfoTypeId') }})
    
